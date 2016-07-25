var path = require('path');

module.exports = {
  entry: __dirname + '/client/index.js',
  output: {
    path: __dirname + '/client/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
    ]
  }
};