var React = require('react');
var Router = require('react-router');
var routes = require('../source/routes');

var scheduleData = require('../collector/current-data');
var scheduleDataJSON = JSON.stringify(scheduleData);

export default function runRouter(requestUrl, response) {
  Router.run(routes, requestUrl, function(Handler, state) {

    var reactHtml = React.renderToString(
      React.createElement(Handler, {
        routerState: state,
        scheduleData: scheduleData
      })
    );

    var html = '<!DOCTYPE html>\n'+
      '<html>\n'+
      '<head>\n'+
      '  <meta charset="utf-8">\n'+
      '  <meta name="viewport" content="width=device-width, initial-scale=1">\n'+
      '  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n'+
      '  <title>Ferry Schedules</title>\n'+
      '  <link rel="stylesheet" href="/ferry-schedule.css">\n'+
      '</head>\n'+
      '<body>\n'+
      '  <div class="react-app">'+reactHtml+'</div>\n'+
      '  <script>window.scheduleData = '+scheduleDataJSON+';</script>\n'+
      '  <script src="/ferry-schedule.bundle.js"></script>\n'+
      '</body>\n'+
      '</html>';

    response.end(html);
  });
};