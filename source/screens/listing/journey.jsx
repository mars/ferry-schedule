var React = require('react/addons');

var Journey = React.createClass({

  propTypes: {
    location: React.PropTypes.object.isRequired,
    time: React.PropTypes.object.isRequired,
    isArrival: React.PropTypes.bool.isRequired,
    location2: React.PropTypes.object.isRequired,
    time2: React.PropTypes.object.isRequired
  },

  getDefaultProps: function() {
    return {
      isArrival: false
    };
  },
  
  render: function() {
    var timeStyle = {
      textAlign: 'right'
    };

    var locationDesc;
    if (!this.props.isArrival) {
      locationDesc = <div>
        {this.props.location.name}
        <div className='detail'>
          {' → ' + this.props.location2.name}
        </div>
      </div>;
    } else {
      locationDesc = <div>
        <div className='detail'>
          {this.props.location2.name + ' → '}
        </div>
        {this.props.location.name}
      </div>;
    }

    var timeDesc;
    var time = this.props.time.format('h:mm a');
    var time2 = this.props.time2.format('h:mm a');
    if (!this.props.isArrival) {
      timeDesc = <div>
        {time}
        <div className='detail'>
          {' → ' + time2}
        </div>
      </div>;
    } else {
      timeDesc = <div>
        <div className='detail'>
          {time2 + ' → '}
        </div>
        {time}
      </div>;
    }

    return <tr>
      <td>{locationDesc}</td>
      <td style={timeStyle}>{timeDesc}</td>
    </tr>;
  }

});

module.exports = Journey;
