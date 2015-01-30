var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;
var RouterState = Router.State;

var moment = require('moment');

var Journey = require('./journey');

var Listing = React.createClass({
  mixins: [ RouterState ],
  
  render: function() {
    var tableStyle = {};
    var cx = React.addons.classSet;
    var byArrival = this.isActive('listing', null, { location: 'by-arrival' });
    var currentWhenNotByArrival = cx({ current: !byArrival });
    
    return <div className='schedule-listing'>
      <table style={tableStyle}>
        <thead className='journey-filters'>
          <th colSpan='2'>
            <Link to='listing' className={currentWhenNotByArrival} activeClassName='query-is-empty'>
              Departures
            </Link>
            <Link to='listing' query={{ location: 'by-arrival' }} activeClassName='current'>
              Arrivals
            </Link>
          </th>
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

    var journeys = scheduleData.journeys.map(function(journey) {
      var route = routes[journey.linked.route];
      var location;
      var time;
      var timeFormat = 'HH:mm a';

      if (this.getQuery()['location']==='by-arrival') {
        location = route.destination;
        time = moment(journey.arrive, timeFormat);
      } else {
        location = route.origin;
        time = moment(journey.depart, timeFormat);
      }

      return <Journey 
        key={journey.id}
        journey={journey}
        route={route}
        location={location} 
        time={time} />;

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
  }

});

module.exports = Listing;
