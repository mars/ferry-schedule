var React = require('react/addons');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var App = require('./app');
var Listing = require('./screens/listing');

var routes = (
  <Route handler={App}>
    <DefaultRoute name="listing" handler={Listing} />
  </Route>
);

module.exports = routes;
