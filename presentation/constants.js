
export const links = {
  preview: 'http://wfarley.aka.corp.amazon.com:3030',
  start: 'https://github.com/goldhand/presentation-websockets/tree/start',
  step2: 'https://github.com/goldhand/presentation-websockets/tree/step-2',
  step3: 'https://github.com/goldhand/presentation-websockets/tree/step-3',
};

export const images = {
  dependencyDiagram: require('../assets/dependency-diagram.jpg'),
};

export const codes = {
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
    developmentBonus: require('raw-loader!../assets/step-2/development-bonus.example'),
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
  step2: {
    bonus: 'How else can you solve this? hint: use emit acknowledgement',
  },
};
