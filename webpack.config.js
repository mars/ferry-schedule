var webpackModule = require('./config/webpack/module.js');
var webpackResolve = require('./config/webpack/resolve.js');

module.exports = [
  {
    name: "browser",

    target: "web",
    debug: true,

    entry: {
      'ferry-schedule': './source/main.jsx'
    },
    output: {
      filename: '[name].bundle.js',
      path: './dist'
    },
    
    // configs shared between environments
    module: webpackModule,
    resolve: webpackResolve

  }
];
