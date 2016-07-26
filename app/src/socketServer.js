const socketIo = require('socket.io');
const messagesService = require('./api/messages/messages.service');

module.exports = server => {
  const io = socketIo(server);

  io.on('connection', function (socket) {
  });

  messagesService.on('created', (msg) => {
    io.emit('message:sent', msg.doc);
  });
};
