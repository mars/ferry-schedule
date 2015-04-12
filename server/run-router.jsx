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
        scheduleData: scheduleData,
        isPrerender: true
      })
    );

    var html = `<!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Ferry Schedules</title>
        <link rel="stylesheet" href="/ferry-schedule.css">
      </head>
      <body>
        <div class="react-app">${reactHtml}</div>
        <script>window.scheduleData = ${scheduleDataJSON};</script>
        <script src="/ferry-schedule.bundle.js"></script>
      </body>
      </html>`;

    response.end(html);
  });
};