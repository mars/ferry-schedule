import React from 'react-native';

let {
  requireNativeComponent,
  StyleSheet,
  View } = React;

let styles = StyleSheet.create({
  scene: {
    flex: 1
  },
  map: {
    flex: 1,
    width: 325,
    alignSelf: 'center'
  }
});

class FerryMapView extends React.Component {
  render() {
    return <View style={styles.scene}>
      <NativeFerryMapView style={styles.map} {...this.props} />
    </View>;
  }
}

var NativeFerryMapView = requireNativeComponent('FerryMapView', FerryMapView);

export default FerryMapView;