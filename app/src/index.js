const app = require('koa')();
global.logger = console;

require('./koa')(app);

const server = require('http').createServer(app.callback());

require('./socketServer')(server);

server.listen(8008);
