var React = require('react/addons');

var Journey = React.createClass({

  propTypes: {
    location: React.PropTypes.string.isRequired,
    time: React.PropTypes.object.isRequired
  },
  
  render: function() {
    var style = {
      backgroundColor: 'transparent'
    };

    return <tr style={style}>
      <td>{this.props.location}</td>
      <td>{this.props.time.fromNow()}</td>
    </tr>;
  }

});

module.exports = Journey;
