const app = require('koa')();
global.logger = console;

require('./koa')(app);

const server = require('http').createServer(app.callback());

server.listen(8008);
require('./events');
