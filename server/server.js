const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

//   socket.emit('newEmail', {
//       from: 'andrew@example.com',
//       text: "Hey. What is going on",
//       createAt: 123
//   });

  socket.emit('newMessage', {
    from: 'andrew',
    text: 'Meet me at 6',
    createAt: 123
  });

//   socket.on('createEmail', (newEmail) => {
//     console.log("createEmail", newEmail);
//   });

  socket.on('createMessage', (message) => {
    console.log("Message", message);
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});


















/* Used Code  

console.log(__dirname + '../public');
console.log(publicPath);

*/