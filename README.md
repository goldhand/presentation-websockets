Websockets
==========
An introduction to NodeJS through websockets.

By Will Farley


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
