import React from 'react-native';
var { requireNativeComponent } = React;

class FerryMapView extends React.Component {
  render() {
    return <NativeFerryMapView {...this.props} />;
  }
}

var NativeFerryMapView = requireNativeComponent('FerryMapView', FerryMapView);

export default FerryMapView;