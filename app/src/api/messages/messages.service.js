const db = require('./../../db');

const service = db.createService('messages');
module.exports = service;
