const config = require('./config');
const db = require('lib/mongo')(config.mongo);

module.exports = db;