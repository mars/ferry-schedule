var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var RouteHandlerKey = require('ferry-schedule/util/route-handler-key');

var App = React.createClass({
  mixins: [RouteHandlerKey],

  render: function() {
    return <div className='ferry-schedule-app'>
      <RouteHandler 
        key={this.routeHandlerKey()} 
        routerState={this.props.routerState} />
    </div>;
  }

});

module.exports = App;
