var http = require('http');
var React = require('react');

var Static    = require('node-static');
var http      = require('http');

var server = http.createServer();
var listenPort = process.env.PORT || 8000;
var staticFiles = new Static.Server('./dist');

server.on('request', function(request, response) {

  if (request.url === '/') {
    console.log('serve React');
  } else {
    request.addListener('end', function () {
      staticFiles.serve(request, response);
    }).resume();
  }

});

server.listen(listenPort);
