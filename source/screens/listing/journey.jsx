var React = require('react/addons');

var Journey = React.createClass({

  propTypes: {
    location: React.PropTypes.string.isRequired,
    time: React.PropTypes.object.isRequired
  },
  
  render: function() {
    var timeStyle = {
      textAlign: 'right'
    };

    return <tr>
      <td>{this.props.location}</td>
      <td style={timeStyle}>{this.props.time.fromNow()}</td>
    </tr>;
  }

});

module.exports = Journey;
