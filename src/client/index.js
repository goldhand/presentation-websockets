import PaintCanvas from './PaintCanvas';
// TODO: 1. import socket.io-client
import io from 'socket.io-client';

// initialize paint canvas
const paintCanvas = new PaintCanvas();

// size the canavas to the window
paintCanvas.sizeCanvas({
  height: window.innerHeight,
  width: window.innerWidth,
});

// mount points
const paintContainerElem = document.getElementById('paint-container');
const controlsElem = document.getElementById('controls');

// mount
paintContainerElem.appendChild(paintCanvas.elem);
controlsElem.appendChild(paintCanvas.colorSelector.elem);
controlsElem.appendChild(paintCanvas.clearButton.elem);


// TODO: 2. create a new socket connection
const socket = io();

// subscribe to canvas events
paintCanvas.subscribe((action, data) => {
  // TODO: 3. emit events that dispatched by paintCanvas to the server
  socket.emit(action, {
    ...data,
  });
});

// listen for socket events
// TODO: 4. listen for and handle events emitted from the server
socket.on('DRAW_POINTS', ({points, color}) => {
  paintCanvas.drawLine(points, color);
});