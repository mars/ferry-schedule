var React = require('react/addons');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var App = require('ferry-schedule/app');
var Listing = require('ferry-schedule/screens/listing');

var routes = (
  <Route handler={App} path="/">
    <Route name="listing" handler={Listing} />
    <Redirect from="/" to="/listing" />
  </Route>
);

module.exports = routes;
