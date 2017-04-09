// fake "users" database
const users = {};

/**
 * adds {username: id} to the users object
 * @param {string} username - username
 * @param {string} id - socket.id
 * @returns {function} removeUser - removeUser() function removes user from "users"
 */
const addUser = (username, id) => {
  users[username] = id;
  return () => {
    delete users[username];
  };
};

const onSocketConnect = io => socket => {
  // listen for "LOGIN" events and update user object
  let logout;
  socket.on('LOGIN', ({username}) => {
    // make sure username isn't already taken
    const usernameAvailable = !Object.prototype.hasOwnProperty.call(users, username);
    if (usernameAvailable) {
      // map username to id
      logout = addUser(username, socket.id);
      // emit "UPDATE_USER_LIST" to all clients
      io.emit('UPDATE_USER_LIST', {users});
    } else {
      socket.emit('USERNAME_TAKEN');
    }
  });

  // listen for "disconnect" event and remove user from "users" object
  socket.on('disconnect', () => {
    if (typeof logout === 'function') logout();
    // emit "UPDATE_USER_LIST" after user is removed from "users" object
    io.emit('UPDATE_USER_LIST', {users});
  });

  socket.on('DRAW_POINTS', ({points, color, toUser}) => {
    if (toUser) {
      socket.broadcast.to(users[toUser]).emit('DRAW_POINTS', {points, color});
    } else {
      // if "toUser", emit even only to that user
      socket.broadcast.emit('DRAW_POINTS', {points, color});
    }
  });

};

module.exports = onSocketConnect;
