const path = require('path');
const Express = require('express');
const socketIO = require('socket.io');
const onSocketConnect = require('./socket');

const DEFAULT_PORT = 3000;

/** @const server port */
const PORT = process.env.PORT || DEFAULT_PORT;

/** @const create a new express app */
const app = new Express();

app.use('/', Express.static(path.resolve(__dirname, '../../dist')));

const server = app.listen(PORT, error => {
  /* eslint-disable no-console */
  if (error) {
    console.error(error);
  } else {
    console.info(
    '🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.',
    PORT,
    PORT
    );
  }
  /* eslint-enable no-console */
});

const io = socketIO(server);

io.on('connection', onSocketConnect(io));
