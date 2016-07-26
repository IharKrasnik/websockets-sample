const messagesService = require('./messages.service.js');

module.exports.getMessages = function * getMessages () {
  const messages = yield messagesService.find({});
  this.body = messages;
};

module.exports.sendMessage = function * sendMessage () {
  yield messagesService.create({
    text: this.request.body.text
  });
};