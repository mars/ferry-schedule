import React from 'react-native';

let {
  requireNativeComponent,
  StyleSheet } = React;

let styles = StyleSheet.create({
  scene: {
    flex: 1,
    padding: 10,
    paddingTop: 74,
    width: 325,
    height: 405
  }
});

class FerryMapView extends React.Component {
  render() {
    return <NativeFerryMapView style={styles.scene} {...this.props} />;
  }
}

var NativeFerryMapView = requireNativeComponent('FerryMapView', FerryMapView);

export default FerryMapView;