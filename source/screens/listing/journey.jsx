var React = require('react/addons');

var Journey = React.createClass({

  propTypes: {
    location: React.PropTypes.string.isRequired,
    time: React.PropTypes.object.isRequired,
    route: React.PropTypes.object.isRequired,
    journey: React.PropTypes.object.isRequired
  },
  
  render: function() {
    var timeStyle = {
      textAlign: 'right'
    };

    var locationDesc;
    if (this.props.location === this.props.route.origin) {
      locationDesc = <div>
        {this.props.location}
        <div className='detail'>
          {' → ' + this.props.route.destination}
        </div>
      </div>;
    } else {
      locationDesc = <div>
        <div className='detail'>
          {this.props.route.origin + ' → '}
        </div>
        {this.props.location}
      </div>;
    }

    return <tr>
      <td>{locationDesc}</td>
      <td style={timeStyle}>{this.props.time.format('h:mm a')}</td>
    </tr>;
  }

});

module.exports = Journey;
