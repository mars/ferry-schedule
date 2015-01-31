var React = require('react/addons');

var Journey = React.createClass({

  propTypes: {
    location: React.PropTypes.object.isRequired,
    time: React.PropTypes.object.isRequired,
    isArrival: React.PropTypes.bool,
    location2: React.PropTypes.object.isRequired
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

    return <tr>
      <td>{locationDesc}</td>
      <td style={timeStyle}>{this.props.time.format('h:mm a')}</td>
    </tr>;
  }

});

module.exports = Journey;
