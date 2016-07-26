const socketIo = require('socket.io');

const io = socketIo();
io.listen(8181);

var redis = require('socket.io-redis');

const config = require('./config');

io.adapter(redis({ host: config.redis.host, port: config.redis.port }));

io.on('connection', function (socket) {
	socket.on('subscribe', ({ roomId }) => {
		socket.join(roomId);
		console.log('Joined', roomId);
	});
});


