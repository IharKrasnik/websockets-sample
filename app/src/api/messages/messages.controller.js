const messagesService = require('./messages.service.js');

module.exports.getMessages = function * getMessages () {
  const roomId = this.request.query.roomId;

  const messages = yield messagesService.find({
  	roomId
  });

  this.body = messages;
};

module.exports.sendMessage = function * sendMessage () {
  yield messagesService.create({
    text: this.request.body.text,
    roomId: this.request.body.roomId
  });

  this.body = 'ok';
};