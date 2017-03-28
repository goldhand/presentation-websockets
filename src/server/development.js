const path = require('path');
const Express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../../webpack-config/development');
// TODO: import socket.io

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

// TODO: 2. create socket server

// TODO: 3. listen for new connections

// TODO: 4. listen for draw events and broadcast them to others
