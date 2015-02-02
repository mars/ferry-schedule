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

    var time = this.props.time.format('h:mm a');
    var time2 = this.props.time2.format('h:mm a');

    var originDesc = <div>
      <div className='detail'>
        {this.props.location.name}
      </div>
      {time}
    </div>;

    var destinationDesc = <div>
      <div className='detail'>
        {this.props.location2.name}
      </div>
      {time2}
    </div>;

    return <tr>
      <td>{originDesc}</td>
      <td className='flush-right'>{destinationDesc}</td>
    </tr>;
  }

});

module.exports = Journey;
