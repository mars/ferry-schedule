var webpackEntry = require('./config/webpack/entry.js');
var webpackOutput = require('./config/webpack/output.js');
var webpackModule = require('./config/webpack/module.js');
var webpackResolve = require('./config/webpack/resolve.js');

module.exports = {

  target: "web",
  debug: true,
  
  // configs shared between environments
  entry: webpackEntry,
  output: webpackOutput,
  module: webpackModule,
  resolve: webpackResolve

};
