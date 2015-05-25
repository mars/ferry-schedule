var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;
var RouterState = Router.State;
var Navigation = Router.Navigation;
var immutableUpdate = React.addons.update;

var currentRouteTime = require('../../util/current-route-time');
var transformScheduleData = require('../../util/transform-schedule-data');
var Journey = require('./journey');

var Listing = React.createClass({
  mixins: [ RouterState, Navigation ],

  propTypes: {
    runningInBrowser: React.PropTypes.bool,
    scheduleData: React.PropTypes.object.isRequired,
    foundPosition: React.PropTypes.bool,
    locationsByDistance: React.PropTypes.array
  },
  
  render: function() {
    var locationQuery = this.getQuery()['location-name'];

    var tableStyle = {};
    var cx = React.addons.classSet;
    var byArrival = this.isActive('listing', null, { 'location-filter': 'by-arrival' });
    var currentWhenNotByArrival = cx({ current: !byArrival });

    return <div className='schedule-listing screen'>
      <h1 className="masthead">Tiburon-San Francisco Ferry Schedules</h1>
      <div className='filters'>
        <span className='detail'>Schedule </span>{this.renderTimeSelect()}
      </div>

      <div key='geolocation-details' className='help'>
        { this.props.foundPosition ? 
            this.props.locationsByDistance[0].distanceMiles.toPrecision(2)
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
    var timeQuery = this.getQuery()['time'] || currentRouteTime();
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
    var journeys = transformScheduleData(scheduleData, this.getQuery());

    var journeyComponents = journeys.map( j => {
      return <Journey 
        key={j.id}
        journey={j.journey}
        route={j.route}
        location={j.location} 
        time={j.time}
        isArrival={j.byArrival}
        location2={j.location2}
        time2={j.time2} />
    });

    return journeyComponents.length === 0 ? <tr>
      <td key='none-origin'><span className='detail'>None</span></td>
      <td key='none-destination' className='flush-right'><span className='detail'>None</span></td>
    </tr> : journeyComponents;
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
  }

});

module.exports = Listing;
