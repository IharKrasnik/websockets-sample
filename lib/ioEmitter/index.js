const ioemitter = require('socket.io-emitter');

module.exports = ({ host, port }) => {
  return ioemitter({ host, port });
}