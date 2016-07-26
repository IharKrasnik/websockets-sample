const config = require('./config');
const messagesService = require('./api/messages/messages.service');

const ioEmitter = require('lib/ioEmitter')({
	host: config.redis.host,
	port: config.redis.port
});

messagesService.on('created', ({ doc: message}) => {
   if (message.roomId) {
   	 ioEmitter.to(message.roomId).emit('message:sent', message);
   }
});