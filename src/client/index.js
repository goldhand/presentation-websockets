import PaintCanvas from './PaintCanvas';
// TODO 1.1: import socket.io-client
import socketIO from 'socket.io-client';
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
const usersElem = document.getElementById('users');

// mount
paintContainerElem.appendChild(paintCanvas.elem);
controlsElem.appendChild(paintCanvas.colorSelector.elem);
controlsElem.appendChild(paintCanvas.clearButton.elem);

// get the client username
// TODO: uncomment me for step 2
let username;

// TODO 1.2: create a new socket connection
const socket = socketIO();
// subscribe to canvas events
paintCanvas.subscribe((action, data) => {
  // TODO 1.3: emit events that dispatched by paintCanvas to the server
  socket.emit(action, data);
});
// TODO 1.4: listen for draw events from the server and use paintCanvas.drawLine to draw the points
socket.on('DRAW_LINE', ({points, color}) => {
  paintCanvas.drawLine(points, color);
});

// TODO 2.1: Emit "LOGIN" event to server
// TODO 2.2: Listen for a username taken event (eg "USERNAME_TAKEN") and prompt for another username
const login = (msg = 'Enter your username') => {
  username = prompt(msg);
  socket.emit('LOGIN', {username}, login);
};
login();
// TODO 2.3: Listen for an update user list event (eg "UPDATE_USER_LIST") from server and update user list display
socket.on('UPDATE_USER_LIST', users => {
  usersElem.innerHTML = '';
  const userButtons = Object.keys(users)
    .filter(user => user !== username)
    .map(user => paintCanvas.createUserButton(user).elem);

  const allButton = paintCanvas.createAllButton().elem;

  usersElem.appendChild(allButton);
  userButtons.forEach(btn => usersElem.appendChild(btn));
});


// TODO 3.1: Create buttons for users, when clicked, only dispatch events to that user
// hint: two new methods are available on the paintCanvas instance:
// paintCanvas.createUserButton(username)
// paintCanvas.createAllButton()
