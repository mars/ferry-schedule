var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;

var Journey = require('./journey');

var Listing = React.createClass({
  
  render: function() {
    return <div className='schedule-listing'>
      <table>
        <thead>
          <th colSpan='2'>Depart</th>
          <th colSpan='2'>Arrive</th>
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
    var journeys = [];
    var routes = {};
    scheduleData.links.routes.forEach(function(route) {
      routes[route.id] = route;
    });
    scheduleData.journeys.forEach(function(journey) {
      var route = routes[journey.linked.route];
      journeys.push(<Journey 
        key={journey.id} 
        origin={route.origin} 
        depart={journey.depart}
        destination={route.destination} 
        arrive={journey.arrive} />);
    });
    return journeys;
  }

});

module.exports = Listing;
