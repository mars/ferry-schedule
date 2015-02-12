var React = require('react/addons');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var App = require('./app');
var Listing = require('./screens/listing');
var Map = require('./screens/map');

var routes = (
  <Route handler={App}>
    <DefaultRoute name="map" handler={Map} />
    <Route name="listing" handler={Listing} />
  </Route>
);

module.exports = routes;
