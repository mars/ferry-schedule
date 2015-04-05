var webpack = require('webpack');
var config = require('./webpack.config');

config.devServer = {
  port: 8080,
  contentBase: './dist',
  publicPath: '/',
  hot: true,
  proxy: {
    "*": "http://localhost:8000/"
  }
};

config.plugins = [
  new webpack.HotModuleReplacementPlugin()
],

config.entry = {
  'ferry-schedule': [
    'webpack-dev-server/client?/',
    'webpack/hot/dev-server',
    './source/main'
  ]
},

module.exports = config;