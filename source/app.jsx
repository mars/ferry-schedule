var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var RouteHandlerKey = require('./util/route-handler-key');

var GeocodeDistance = require('./util/geocode-distance');

var App = React.createClass({
  mixins: [RouteHandlerKey],

  componentDidMount: function() {
    this.findPosition();
  },

  render: function() {
    return <div className='ferry-schedule-app'>
      <RouteHandler
        scheduleData={this.props.scheduleData}
        key={this.routeHandlerKey()} 
        routerState={this.props.routerState} />
    </div>;
  },

  findPosition: function() {
    navigator &&
      navigator.geolocation &&
        navigator.geolocation.getCurrentPosition(this.foundPosition);
  },

  foundPosition: function(position) {
    /*
    Position.coords Read only
    Returns a Coordinates object defining the current location:
      Coordinates.latitude Read only
      Returns a double representing the position's latitude in decimal degrees.
      Coordinates.longitude Read only
      Returns a double representing the position's longitude in decimal degrees.
    Position.timestamp Read only
    Returns a DOMTimeStamp representing the time at which the location was retrieved.
    */
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var locations = this.props.scheduleData.links.locations
      .map(function(loc) {
        loc.distanceMiles = GeocodeDistance.calc(
          lat, lon,
          loc.latitude, loc.longitude,
          GeocodeDistance.EarthRadiusInMiles);
        loc.distanceKilometers = GeocodeDistance.calc(
          lat, lon,
          loc.latitude, loc.longitude,
          GeocodeDistance.EarthRadiusInKilometers);
        return loc;
      });
    var sortedLocations = locations.sort(function(a, b) {
      if (a.distanceMiles === b.distanceMiles) { return 0; }
      return a.distanceMiles < b.distanceMiles ? -1 : 1;
    });
    console.dir(position);
    console.dir(sortedLocations);
  }

});

module.exports = App;
