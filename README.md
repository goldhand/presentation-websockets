Websockets
==========
An introduction to NodeJS through websockets.

By Will Farley


Steps
-----
### Setup
```
$ git clone git@github.com:goldhand/presentation-websockets.git
$ npm install && npm start
```

### Step 1
`./src/client/PaintCanvas.js`:
* 1.1: Dispatch the draw event to other client

`./src/client/index.js`:
* 1.1: import socket.io-client
* 1.2: attach socket to the server instance
* 1.3: listen for new connections and handle them in the socket callback
* 1.4: listen for draw events and broadcast them to others

`./src/server/development.js`
* 1.1: import socket.io
* 1.2: attach socket to the server instance
* 1.3: listen for new connections and handle them in the socket callback
* 1.4: listen for draw events and broadcast them to others


### Step 2
`./src/client/index.js`:
* 2.1: Emit "LOGIN" event to server
* 2.2: Listen for a username taken event (eg "USERNAME_TAKEN") and prompt for another username
* 2.3: Listen for an update user list event (eg "UPDATE_USER_LIST") from server and update user list display

`./src/server/development.js`
* 2.1: listen for "LOGIN" events and update user object
* 2.2: Prevent users from using an existing username
* 2.3: emit "UPDATE_USER_LIST" to all clients
* 2.4: listen for "disconnect" event and remove user from "users" object
* 2.5: emit "UPDATE_USER_LIST" after user is removed from "users" object


### Step 3
`./src/client/index.js`:
* 3.1: Check if a "toUser" is specified and only broadcast to that user

`./src/server/development.js`
* 3.1: Check if a "toUser" is specified and only broadcast to that user

Sockets
-------
This is how you get your socket instance
```javascript
import socketIO from 'socket.io';

const server = HttpServer();
const io = socketIO(server);
io.on('connection' socket => {
  // socket refers to the connecting client instance
});
```
*server.js*

To emit to all clients, use `io` instead of `socket`.
```javascript
io.emit('EVERYONE', 'foo');
```
*server.js*

To just emit to a the single client socket instance, use `socket.emit`.
```javascript
socket.emit('SECRET', 'bar');  
```
*server.js*

To emit to everyone *except* the client socket instance, use `socket.broadcast.emit`.
```javascript
socket.broadcast.emit('EVERYONE_ELSE', 'foo');
```
*server.js*


You can also pass a callback from the client to the server when you emit from the client.
```javascript
import io from 'socket.io-client';
const socket = io();

socket.emit('SERVER_FUNCTION', serverData => {
  console.log(serverData);
})
```
*client.js*


Then you can invoke the function from the server.
```javascript
socket.on('SERVER_FUNCTION', callback => {
  callback(serverDb);
});
```
*server.js*
