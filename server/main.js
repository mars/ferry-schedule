var NodeJSX = require('node-jsx')
NodeJSX.install({
  extension: '.jsx'
});

var http = require('http');
var Static = require('node-static');

var React = require('react');
var Router = require('react-router');
var routes = require('../source/routes');

var server = http.createServer();
var listenPort = process.env.PORT || 8000;
var staticFiles = new Static.Server('./dist');

server.on('request', function(request, response) {

  // Ideally this would match for existing React routes.
  if (request.url === '/') {

    Router.run(routes, request.url, function(Handler, state) {

      var html = React.renderToString(
        React.createElement(Handler, {
          routerState: state
        })
      );

      html = '<!DOCTYPE html>'+
        '<html>'+
        '<head>'+
        '  <meta charset="utf-8">'+
        '  <meta http-equiv="X-UA-Compatible" content="IE=edge">'+
        '  <title>Ferry Schedules</title>'+
        '  <link rel="stylesheet" href="">'+
        '</head>'+
        '<body>'+
        '  <div class="react-app">'+html+'</div>'+
        '  <script src="ferry-schedule.bundle.js"></script>'+
        '</body>'+
        '</html>';

      response.end(html);
    });

  } else {
    request.addListener('end', function () {
      staticFiles.serve(request, response);
    }).resume();
  }

});

server.listen(listenPort);
