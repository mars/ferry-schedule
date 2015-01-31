var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;
var RouterState = Router.State;
var Navigation = Router.Navigation;

var moment = require('moment');

var Journey = require('./journey');

var Listing = React.createClass({
  mixins: [ RouterState, Navigation ],
  
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

    // map Ferry Routes by their ID, to join with Journeys
    var routes = {};
    scheduleData.links.routes.forEach(function(route) {
      routes[route.id] = route;
    });

    var locationName = this.getQuery()['location-name']
    if (locationName !== undefined && locationName !== '') {
      locationName = locationName.toLowerCase();
    }

    var timeFormat = 'HH:mm a';
    var journeys = [];
    scheduleData.journeys.forEach(function(journey) {
      var route = routes[journey.linked.route];
      var location;
      var time;

      if (this.getQuery()['location']==='by-arrival') {
        location = route.destination;
        time = moment(journey.arrive, timeFormat);
      } else {
        location = route.origin;
        time = moment(journey.depart, timeFormat);
      }

      var shouldDisplayJourney = 
        locationName === undefined || 
        locationName === '' || 
        location.toLowerCase().indexOf(locationName) >= 0;

      if (shouldDisplayJourney) {
        journeys.push(
          <Journey 
            key={journey.id}
            journey={journey}
            route={route}
            location={location} 
            time={time} />
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
