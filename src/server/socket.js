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

  // TODO 1.4: listen for draw events and broadcast them to others
  socket.on('DRAW_LINE', ({points, color, toUser}) => {
  // TODO 3.1: Check if a "toUser" is specified and only broadcast to that user
    if (toUser) {
      socket.broadcast.to(users[toUser]).emit('DRAW_LINE', {points, color});
    } else {
      socket.broadcast.emit('DRAW_LINE', {points, color});
    }
  });

  let removeUser;

  // TODO 2.1: listen for "LOGIN" events and update user object
  socket.on('LOGIN', ({username}, login) => {
  // TODO 2.2: Prevent users from using an existing username
    if (Object.prototype.hasOwnProperty.call(users, username)) {
      login(`${username} is taken, please select another`);
    } else {
      removeUser = addUser(username, socket.id);
  // TODO 2.3: emit "UPDATE_USER_LIST" to all clients
      io.emit('UPDATE_USER_LIST', users);
    }
  });
  // TODO 2.4: listen for "disconnect" event and remove user from "users" object
  socket.on('disconnect', () => {
    if (typeof removeUser === 'function') removeUser();
  // TODO 2.5: emit "UPDATE_USER_LIST" after user is removed from "users" object
    io.emit('UPDATE_USER_LIST', users);
  });

};

module.exports = onSocketConnect;
