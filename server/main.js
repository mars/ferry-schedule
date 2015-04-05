require('babel/register');
var runRouter = require('./run-router');

var http = require('http');
var url = require('url');
var Static = require('node-static');

var server = http.createServer();
var listenPort = process.env.PORT || 8000;
var staticFiles = new Static.Server('./dist');

server.on('request', function(request, response) {
  var parsedURL = url.parse(request.url);
  // {
  //   protocol: null,
  //   slashes: null,
  //   auth: null,
  //   host: null,
  //   port: null,
  //   hostname: null,
  //   hash: null,
  //   search: '?location=by-arrival',
  //   query: 'location=by-arrival',
  //   pathname: '/',
  //   path: '/?location=by-arrival',
  //   href: '/?location=by-arrival'
  // }

  // Ideally this would match for existing React routes.
  var pathName = parsedURL.pathname;
  if (pathName === '/' ||
      pathName === '/listing' ||
      pathName === '/map') {

    console.log('=== route', request.url);
  	runRouter(request.url, response);

  } else {
    request.addListener('end', function () {
      console.log('--- static', request.url);
      staticFiles.serve(request, response);
    }).resume();
  }

});

server.listen(listenPort, function() {
  console.log('Ferry.life server listening on '+listenPort);
});