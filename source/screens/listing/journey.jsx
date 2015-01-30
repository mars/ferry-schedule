var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;

var Journey = React.createClass({

  getInitialState: function() {
    return {
      on: false
    };
  },
  
  render: function() {
    var style = {
      backgroundColor: this.state.on ? '#f90' : 'transparent'
    }

    return <tr style={style} onClick={this.handleClick}>
      <td>{this.props.origin}</td>
      <td>{this.props.depart}</td>
      <td>{this.props.destination}</td>
      <td>{this.props.arrive}</td>
    </tr>;
  },

  handleClick: function() {
    this.setState({ on: !this.state.on });
  }

});

module.exports = Journey;
