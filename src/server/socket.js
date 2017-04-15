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


  // TODO 2.1: listen for "LOGIN" events and update user object
  // TODO 2.2: Prevent users from using an existing username
  // TODO 2.3: emit "UPDATE_USER_LIST" to all clients
  // TODO 2.4: listen for "disconnect" event and remove user from "users" object
  // TODO 2.5: emit "UPDATE_USER_LIST" after user is removed from "users" object


  // TODO 3.1: Check if a "toUser" is specified and only broadcast to that user

};

module.exports = onSocketConnect;
