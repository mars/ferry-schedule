var NodeJSX = require('node-jsx')
NodeJSX.install({
  extension: '.jsx'
});

var http = require('http');
var Static = require('node-static');

var React = require('react');
var Router = require('react-router');
var routes = require('../source/routes');

var scheduleData = require('../collector/current-data');

var server = http.createServer();
var listenPort = process.env.PORT || 8000;
var staticFiles = new Static.Server('./dist');

server.on('request', function(request, response) {

  // Ideally this would match for existing React routes.
  if (request.url === '/') {

    Router.run(routes, request.url, function(Handler, state) {

      var html = React.renderToString(
        React.createElement(Handler, {
          routerState: state,
          scheduleData: scheduleData
        })
      );

      html = '<!DOCTYPE html>\n'+
        '<html>\n'+
        '<head>\n'+
        '  <meta charset="utf-8">\n'+
        '  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n'+
        '  <title>Ferry Schedules</title>\n'+
        '  <link rel="stylesheet" href="">\n'+
        '</head>\n'+
        '<body>\n'+
        '  <div class="react-app">'+html+'</div>\n'+
        '  <script>window.scheduleData = '+JSON.stringify(scheduleData)+';</script>\n'+
        '  <script src="ferry-schedule.bundle.js"></script>\n'+
        '</body>\n'+
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
