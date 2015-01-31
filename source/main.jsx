var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

React.initializeTouchEvents(true);

document.addEventListener("DOMContentLoaded", function(event) {

  Router.run(routes, Router.HistoryLocation, function(Handler, state) {
    React.render(<Handler
      scheduleData={window.scheduleData}
      routerState={state}
      runningInBrowser={true} />, document.querySelector(".react-app"));
  });

});
