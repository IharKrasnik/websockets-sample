const serve = require('koa-static');
const mount = require('koa-mount');
const bodyParser = require('koa-bodyparser');

const path = require('path');
const root = path.resolve(__dirname, '../');

const routes = require('./routes');

module.exports = (app) => {
  app.use(bodyParser());
  app.use(mount('/', serve(path.join(root, '/src/client'))));

  routes(app);

  app.use(function *(next) {
    try {
      yield next;
    } catch (err) {
      console.error(err);
      this.status = err.status || 500;
      this.body = err.message;
      this.app.emit('error', err, this);
    }
  });
};