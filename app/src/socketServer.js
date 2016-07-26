const socketIo = require('socket.io');

module.exports = server => {
  const io = socketIo(server);

  io.on('connection', function (socket) {
    socket.on('message:send', function (msg) {
      io.emit('message:sent', msg);
    });
  });
};
