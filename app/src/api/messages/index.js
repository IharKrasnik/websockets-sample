const controller = require('./messages.controller');
const router = require('koa-router')();

router.get('/', controller.getMessages);
router.post('/', controller.sendMessage);

module.exports = router.routes();
