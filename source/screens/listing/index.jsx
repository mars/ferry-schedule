var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;
var RouterState = Router.State;
var Navigation = Router.Navigation;
var immutableUpdate = React.addons.update;

var moment = require('moment');

var Journey = require('./journey');

var Listing = React.createClass({
  mixins: [ RouterState, Navigation ],

  propTypes: {
    runningInBrowser: React.PropTypes.bool,
    scheduleData: React.PropTypes.object.isRequired,
    foundPosition: React.PropTypes.bool,
    locationsByDistance: React.PropTypes.array
  },

  componentDidMount: function() {
    if (this.props.runningInBrowser) {
      var originalQuery = this.getQuery();
      var routeTime = originalQuery['time'] || this.currentRouteTime();
      var queryForTime = immutableUpdate(originalQuery, {$merge: {
        'time': routeTime
      }});
      this.replaceWith('listing', this.getParams(), queryForTime);
    }
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.foundPosition && !this.props.foundPosition) {
      var originalQuery = this.getQuery();
      var nearestLocation = nextProps.locationsByDistance[0].id;
      var queryForNearestLocation = immutableUpdate(originalQuery, {$merge: {
        'location-name': nearestLocation
      }});
      this.replaceWith('listing', this.getParams(), queryForNearestLocation);
    }
  },
  
  render: function() {
    var locationQuery = this.getQuery()['location-name'];

    var tableStyle = {};
    var cx = React.addons.classSet;
    var byArrival = this.isActive('listing', null, { 'location-filter': 'by-arrival' });
    var currentWhenNotByArrival = cx({ current: !byArrival });

    return <div className='schedule-listing'>
      <h1 className="masthead">Tiburon-San Francisco Ferry Schedules</h1>
      <div className='filters'>
        <span className='detail'>From </span>{this.renderLocationSelect()}
        <span className='detail'> on a </span>{this.renderTimeSelect()}
      </div>

      <div key='geolocation-details' className='help'>
        { this.props.foundPosition ? 
            this.props.locationsByDistance[0].distanceMiles
              +' miles from '
              + this.props.locationsByDistance[0].name: 
            'Current Position Unknown' }
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th>
              Origin
            </th>
            <th className='flush-right'>
              Destination
            </th>
          </tr>
        </thead>
        <tbody>
          {this.renderJourneys(this.props.scheduleData)}
        </tbody>
      </table>
    </div>;
  },

  renderLocationSelect: function() {
    var locations = this.props.scheduleData.linked.locations;
    var locationQuery = this.getQuery()['location-name'] || '';
    var options = locations.map(function(location) {
      return <option 
        value={location.id} 
        key={'location-select-'+location.id}>
        {location.name}
      </option>;
    });
    return <select key='location-select'
      onChange={this.searchByLocation}
      value={locationQuery.toLowerCase()}>
      <option value='' key='location-select-all'>All</option>
      {options}
    </select>;
  },

  renderTimeSelect: function() {
    var timeQuery = this.getQuery()['time'] || '';
    return <select key='time-select'
      onChange={this.searchByTime}
      value={timeQuery.toLowerCase()}>
      <option value='weekday' key='time-select-weekday'>
        Weekday
      </option>
      <option value='weekend' key='time-select-weekend'>
        Weekend
      </option>
    </select>;
  },

  renderJourneys: function(scheduleData) {
    if (scheduleData === undefined) {
      return;
    }

    var byArrival = this.getQuery()['location-filter'] === 'by-arrival';

    // map Ferry Routes by their ID, to join with Journeys
    var routes = {};
    scheduleData.linked.routes.forEach(function(route) {
      routes[route.id] = route;
    });

    // map Location by their ID, to join with Routes
    var locations = {}
    scheduleData.linked.locations.forEach(function(location) {
      locations[location.id] = location;
    });

    var locationQuery = this.getQuery()['location-name']
    if (locationQuery !== undefined && locationQuery !== '') {
      locationQuery = locationQuery.toLowerCase();
    }

    var timeQuery = this.getQuery()['time']
    if (timeQuery !== undefined && timeQuery !== '') {
      timeQuery = timeQuery.toLowerCase();
    } else {
      timeQuery = 'weekday';
    }

    var timeFormat = 'HH:mm a';
    var journeys = [];
    scheduleData.journeys.forEach(function(journey) {
      var route = routes[journey.links.route.id];
      var location;
      var location2;
      var time;
      var time2;

      if (this.getQuery()['location-filter']==='by-arrival') {
        location = locations[route.links.destination.id];
        time = moment(journey.arrive, timeFormat);
        location2 = locations[route.links.origin.id];
        time2 = moment(journey.depart, timeFormat);
      } else {
        location = locations[route.links.origin.id];
        time = moment(journey.depart, timeFormat);
        location2 = locations[route.links.destination.id];
        time2 = moment(journey.arrive, timeFormat);
      }

      var shouldDisplayJourney = 
        (
          // missing location query shows all
          locationQuery === undefined || 
          locationQuery === '' || 
          location.id.toLowerCase() === locationQuery
        ) && (
          // time query must always match
          journey.days.toLowerCase() === timeQuery
        );

      if (shouldDisplayJourney) {
        journeys.push(
          <Journey 
            key={journey.id}
            journey={journey}
            route={route}
            location={location} 
            time={time}
            isArrival={byArrival}
            location2={location2}
            time2={time2}  />
        );
      }

    }, this);

    var sortedJourneys = journeys.sort(function(a, b) {
      a = a.props.time;
      b = b.props.time;
      if (a.isSame(b)) {
        return 0;
      } else {
        return a.isBefore(b) ? -1 : 1;
      }
    });

    return sortedJourneys;
  },

  searchByLocation: function(event) {
    var queryForLocation = immutableUpdate(this.getQuery(), {$merge: {
      'location-name': event.target.value
    }});
    this.replaceWith('listing', this.getParams(), queryForLocation);
  },

  searchByTime: function(event) {
    var queryForTime = immutableUpdate(this.getQuery(), {$merge: {
      'time': event.target.value
    }});
    this.replaceWith('listing', this.getParams(), queryForTime);
  },

  currentRouteTime: function() {
    var today = moment().day();
    var routeDays = today === 0 || today === 6 ?
      'weekend' : 'weekday';
    return routeDays;
  }

});

module.exports = Listing;
