const path = require('path');

const mount = require('koa-mount');
const send = require('koa-send');
const Router = require('koa-router');
const router = new Router();

module.exports = (app) => {
  app.use(mount('/api/messages', require('./api/messages')));

  app.use(mount('/', function* index () {
    yield send(this, path.resolve(__dirname, './client/index.html'));
  }));
};