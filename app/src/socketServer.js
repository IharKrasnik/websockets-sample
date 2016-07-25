const socketIo = require('socket.io');

module.exports = server => {
  const io = socketIo(server);

  io.on('connection', () => {
  });
};
