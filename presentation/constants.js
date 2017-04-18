
export const links = {
  preview: 'http://wfarley.aka.corp.amazon.com:3000',
  heroku: 'tiny/rh321fv2',
  herokuActual: 'https://pacific-shelf-23698.herokuapp.com/',
  start: 'tiny/gx00fpsj/start',
  startActual: 'https://github.com/goldhand/presentation-websockets/tree/start',
  startAmazon: 'tiny/gx00fpsj/start-amazon',
  startAmazonActual: 'https://github.com/goldhand/presentation-websockets/tree/start',
  step2: 'tiny/gx00fpsj/step-2',
  step2Actual: 'https://github.com/goldhand/presentation-websockets/tree/step-2',
  step3: 'tiny/gx00fpsj/step-3',
  step3Actual: 'https://github.com/goldhand/presentation-websockets/tree/step-3',
  amazonBuildExample: 'tiny/gt7rga78',
  amazonBuildExampleActual: 'https://github.com/goldhand/presentation-websockets/commit/eb0555795e4111be47a2188b0819f95b0fd77157',
};

export const codes = {
  websockets: require('raw-loader!../assets/websockets.example'),
  server: require('raw-loader!../assets/server.example'),
  client: require('raw-loader!../assets/client.example'),
  emitCheatsheet: require('raw-loader!../assets/emit-cheatsheet.example'),
  step1: {
    index: require('raw-loader!../assets/step-1/index.example'),
    PaintCanvas: require('raw-loader!../assets/step-1/PaintCanvas.example'),
    development: require('raw-loader!../assets/step-1/development.example'),
  },
  step2: {
    index: require('raw-loader!../assets/step-2/index.example'),
    development: require('raw-loader!../assets/step-2/development.example'),
  },
  step3: {
    index: require('raw-loader!../assets/step-3/index.example'),
    development: require('raw-loader!../assets/step-3/development.example'),
  },
};

export const slideNotes = {
  socket: {
    client: '',
    server: '',
    emitCheatsheet: 'socket.emit(event, [...args][, ack])',
  },
  step1: {
    client: 'You can use any event name for the "draw" event, just make sure the server listens for the same name. It would be a good practice to save all your events in a "constants.js" file',
  },
  step2: {
    client: '',
    bonus: 'How else can you solve this? hint: use emit acknowledgement',
  },
};
