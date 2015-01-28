var webpack = require("webpack");

var webpackEntry = require('./config/webpack/entry.js');
var webpackOutput = require('./config/webpack/output.js');
var webpackModule = require('./config/webpack/module.js');
var webpackResolve = require('./config/webpack/resolve.js');

webpack({

  target: "node",
  debug: true,
  
  // configs shared between environments
  entry: webpackEntry,
  output: webpackOutput,
  module: webpackModule,
  resolve: webpackResolve

}, function(err, stats) {
  if (err) {
    console.error(err);
  } else {
    console.dir(stats);
  }
});
