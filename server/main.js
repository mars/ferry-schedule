var http = require('http');
var Static = require('node-static');

var React = require('react');
var Router = require('react-router');
var routes = require('./ferry-schedule-server.bundle');

var server = http.createServer();
var listenPort = process.env.PORT || 8000;
var staticFiles = new Static.Server('./dist');

server.on('request', function(request, response) {

  if (request.url === '/' || request.url === '/listing') {

    Router.run(routes, request.url, function(Handler, state) {

      var html = React.renderToString(
        React.createElement(Handler, {
          routerState: state
        })
      );
      response.end(html);
    });

  } else {
    request.addListener('end', function () {
      staticFiles.serve(request, response);
    }).resume();
  }

});

server.listen(listenPort);
