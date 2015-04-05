var webpack = require('webpack');
var config = require('./webpack.config');

var port = process.env.HOT_LOAD_PORT || 8080;

config.devServer = {
  port: port,
  contentBase: './dist',
  publicPath: '/',
  hot: true,
  proxy: {
    "*": "http://localhost:8000/"
  }
};

config.plugins = [
  new webpack.HotModuleReplacementPlugin()
];

config.entry = {
  'ferry-schedule': [
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/dev-server',
    './source/main'
  ]
};

config.module = {
  loaders: [{
    test: /\.jsx$/, loaders: ['react-hot', 'babel']
  }]
};

module.exports = config;