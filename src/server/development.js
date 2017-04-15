const Express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../../webpack-config/development');
// TODO 1.1: import socket.io

const DEFAULT_PORT = 3000;

// server port
const port = process.env.PORT || DEFAULT_PORT;

// server
const app = new Express();

// webpack
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

// start server
const server = app.listen(port, error => {
  if (error) {
    throw error;
  } else {
    /* eslint-disable no-console */
    console.info(
      '🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.',
      port,
      port
    );
    /* eslint-enable no-console */
  }
});

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

// TODO 1.2: attach socket to the server instance
// TODO 1.3: listen for new connections and handle them in the socket callback
// TODO 1.4: listen for draw events and broadcast them to others


// TODO 2.1: listen for "LOGIN" events and update user object
// TODO 2.2: Prevent users from using an existing username
// TODO 2.3: emit "UPDATE_USER_LIST" to all clients
// TODO 2.4: listen for "disconnect" event and remove user from "users" object
// TODO 2.5: emit "UPDATE_USER_LIST" after user is removed from "users" object


// TODO 3.1: Check if a "toUser" is specified and only broadcast to that user
