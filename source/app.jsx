var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var RouteHandlerKey = require('./util/route-handler-key');

var App = React.createClass({
  mixins: [RouteHandlerKey],

  render: function() {
    return <div className='ferry-schedule-app'>
      <RouteHandler
        scheduleData={this.props.scheduleData}
        key={this.routeHandlerKey()} 
        routerState={this.props.routerState} />
    </div>;
  }

});

module.exports = App;
