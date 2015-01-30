var React = require('react/addons');

var RouteHandlerKeyMixin = {
  propTypes: {
    routerState: React.PropTypes.object.isRequired
  },

  routeHandlerKey: function () {
    var routes = this.props.routerState.routes;
    var routeIndex = routes.length - 1;
    var childName = this.props.routerState.routes[routeIndex].name;
    var id = this.props.routerState.params.id;
    var key = id===undefined ? childName : childName+'-'+id;
    return key;
  }

};

module.exports = RouteHandlerKeyMixin;
