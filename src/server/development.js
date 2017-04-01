const path = require('path');
const Express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../../webpack-config/development');
const socketIO = require('socket.io');

// port
const port = 3000;

// server
const app = new Express();

// webpack
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

// static
app.use('/assets/', Express.static(path.resolve(__dirname, '../client/assets')));

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

const io = socketIO(server);

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

io.on('connection', socket => {
  // TODO: 1. listen for "LOGIN" events and update user object

  // TODO: 2. emit "UPDATE_USER_LIST" to all clients

  // TODO: 3. listen for "disconnect" event and remove user from "users" object

  // TODO: 4. emit "UPDATE_USER_LIST" after user is removed from "users" object

  socket.on('DRAW_POINTS', ({points, color}) => {
    socket.broadcast.emit('DRAW_POINTS', {points, color});
  });

});
