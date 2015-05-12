import React from 'react-native';
var { requireNativeComponent } = React;

class MapView extends React.Component {
  render() {
    return <NativeMapView {...this.props} />;
  }
}

var NativeMapView = requireNativeComponent('MapView', MapView);

export default MapView;