var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;
var RouterState = Router.State;
var Navigation = Router.Navigation;

var moment = require('moment');

var Journey = require('./journey');

var Listing = React.createClass({
  mixins: [ RouterState, Navigation ],

  propTypes: {
    scheduleData: React.PropTypes.object.isRequired,
    foundPosition: React.PropTypes.bool,
    locationsByDistance: React.PropTypes.array
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.foundPosition && !this.props.foundPosition) {
      this.replaceWith('listing', this.getParams(), {
        'location': this.getQuery()['location'],
        'location-name': nextProps.locationsByDistance[0].name
      });
    }
  },
  
  render: function() {
    var locationName = this.getQuery()['location-name'];

    var tableStyle = {};
    var cx = React.addons.classSet;
    var byArrival = this.isActive('listing', null, { location: 'by-arrival' });
    var currentWhenNotByArrival = cx({ current: !byArrival });

    return <div className='schedule-listing'>
      <table style={tableStyle}>
        <thead className='journey-filters'>
          <tr>
            <th colSpan='2'>
              <Link to='listing'
                query={{ 'location-name': locationName }}
                className={currentWhenNotByArrival}
                activeClassName='query-is-empty'>
                Departures
              </Link>
              {' → '}
              <Link to='listing'
                query={{ location: 'by-arrival', 'location-name': locationName }}
                activeClassName='current'>
                Arrivals
              </Link>
            </th>
          </tr>
          <tr>
            <th colSpan='2'>
              <input ref="searchByName" type="search" className="form-input" placeholder="Search by Location" onChange={this.searchByLocation} value={locationName} />
              <div className='detail'>
                { this.props.foundPosition ? 
                    this.props.locationsByDistance[0].distanceMiles
                      +' miles from '
                      + this.props.locationsByDistance[0].name: 
                    'Current Position Unknown' }
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.renderJourneys(this.props.scheduleData)}
        </tbody>
      </table>
    </div>;
  },

  renderJourneys: function(scheduleData) {
    if (scheduleData === undefined) {
      return;
    }

    var byArrival = this.getQuery()['location'] === 'by-arrival';

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

    var timeFormat = 'HH:mm a';
    var journeys = [];
    scheduleData.journeys.forEach(function(journey) {
      var route = routes[journey.links.route.id];
      var location;
      var location2;
      var time;

      if (this.getQuery()['location']==='by-arrival') {
        location = locations[route.links.destination.id];
        time = moment(journey.arrive, timeFormat);
        location2 = locations[route.links.origin.id];
      } else {
        location = locations[route.links.origin.id];
        time = moment(journey.depart, timeFormat);
        location2 = locations[route.links.destination.id];
      }

      var shouldDisplayJourney = 
        locationQuery === undefined || 
        locationQuery === '' || 
        location.name.toLowerCase().indexOf(locationQuery) >= 0;

      if (shouldDisplayJourney) {
        journeys.push(
          <Journey 
            key={journey.id}
            journey={journey}
            route={route}
            location={location} 
            time={time}
            byArrival={byArrival}
            location2={location2}  />
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
    var originalQuery = this.getQuery();
    this.replaceWith('listing', this.getParams(), {
      'location': originalQuery['location'],
      'location-name': event.target.value
    });
  }

});

module.exports = Listing;
