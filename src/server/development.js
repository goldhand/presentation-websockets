const Express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../../webpack-config/development');
const onSocketConnect = require('./socket');
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

// TODO 1.2: attach socket to the server instance
// TODO 1.3: listen for new connections and handle them in the socket callback
// io.on('connection', onSocketConnect(io));
