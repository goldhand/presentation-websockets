import PaintCanvas from './PaintCanvas';
import Button from './Button';
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


const socket = io();

// subscribe to canvas events
paintCanvas.subscribe((action, data) => {
  socket.emit(action, {
    ...data,
  });
});

// listen for socket "DRAW_POINTS" events and draw the line
socket.on('DRAW_POINTS', ({points, color}) => {
  paintCanvas.drawLine(points, color);
});

// client username
let username = prompt('Enter your username');

// Emit "LOGIN" event to server
socket.on('connect', () => {
  socket.emit('LOGIN', {username});
});

// If username is taken, prompt for another username
socket.on('USERNAME_TAKEN', () => {
  username = prompt(`Username ${username} taken, enter another username`);
  socket.emit('LOGIN', {username});
});

// listen for "UPDATE_USER_LIST" events from server and update user list display
const usersElem = document.getElementById('users');
socket.on('UPDATE_USER_LIST', ({users}) => {
  // TODO: 1. create buttons for users, when clicked, only dispatch events to that user
  // *hint: two new methods are available on the paintCanvas instance:
  // paintCanvas.createUserButton(username)
  // paintCanvas.createAllButton()
  const usernames = Object.keys(users).map(user => `<li>${user}</li>`);
  usersElem.innerHTML = usernames.join('');
});
