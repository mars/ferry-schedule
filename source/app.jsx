var React = require('react/addons');
var Transition = React.addons.CSSTransitionGroup;
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var RouteHandlerKey = require('./util/route-handler-key');
var immutableUpdate = React.addons.update;

var GeocodeDistance = require('./util/geocode-distance');

var App = React.createClass({
  mixins: [RouteHandlerKey],

  getInitialState: function() {
    return {
      foundPosition: false,
      locationsByDistance: [],
      transitionName: 'to-listing'
    };
  },

  componentDidMount: function() {
    this.findPosition();
  },

  componentWillReceiveProps: function(nextProps) {
    this.setTransitionDirection(nextProps);
  },

  render: function() {
    return <div className='ferry-schedule-app screen'>
      <Transition transitionName={this.state.transitionName} component='div' className='screen'>

        <RouteHandler
          scheduleData={this.props.scheduleData}
          foundPosition={this.state.foundPosition}
          locationsByDistance={this.state.locationsByDistance}
          runningInBrowser={this.props.runningInBrowser}
          key={this.routeHandlerKey()} 
          routerState={this.props.routerState} />

      </Transition>
    </div>;
  },

  findPosition: function() {
    if (this.props.runningInBrowser) {
      navigator &&
        navigator.geolocation &&
          navigator.geolocation.getCurrentPosition(this.foundPosition);
    }
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
    this.setState({
      foundPosition: true,
      locationsByDistance: this.sortLocationsByDistance(
        position, this.props.scheduleData.linked.locations)
    });
  },

  sortLocationsByDistance: function(position, locations) {
    var locationsWithDistances = locations.map(function(location) {
      var distances = this.calcDistances(position.coords, location);
      return immutableUpdate(location, {$merge: distances});
    }, this);
    var sortedLocations = locationsWithDistances.sort(function(a, b) {
      if (a.distanceKm === b.distanceKm) { return 0; }
      return a.distanceKm < b.distanceKm ? -1 : 1;
    });
    return sortedLocations;
  },

  calcDistances: function(coords1, coords2) {
    var distances = {};
    distances.distanceMiles = GeocodeDistance.calc(
      coords1.latitude, coords1.longitude,
      coords2.latitude, coords2.longitude,
      GeocodeDistance.EarthRadiusInMiles).toPrecision(2);
    distances.distanceKm = GeocodeDistance.calc(
      coords1.latitude, coords1.longitude,
      coords2.latitude, coords2.longitude,
      GeocodeDistance.EarthRadiusInKilometers).toPrecision(2);
    return distances;
  },

  currentRouteName: function() {
    return this.props.routerState.pathname;
  },

  // Directional animated transitions based on route history.
  setTransitionDirection: function(nextProps) {
    var currentRouteName = this.currentRouteName();
    var nextRouteName = nextProps.routerState.pathname;

    if (nextRouteName === '/listing') {
      this.setState({ 
        transitionName: 'to-listing'
      });
    } else if (nextRouteName === '/') {
      this.setState({ 
        transitionName: 'to-map'
      });
    }
  }

});

module.exports = App;
