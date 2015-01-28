var React = require('react');
var Router = require('react-router');
var routes = require('ferry-schedule/routes');

React.initializeTouchEvents(true);

document.addEventListener("DOMContentLoaded", function(event) {

  Router.run(routes, function(Handler, state) {
    React.render(<Handler routerState={state} />, document.querySelector(".react-app"));
  });

});
