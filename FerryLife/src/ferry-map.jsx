import React from 'react-native';

let {
  DeviceEventEmitter,
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

  componentDidMount() {
    this._subscription_SelectFerryTerminal = DeviceEventEmitter.addListener(
      'ferryTerminalSelected',
      terminal => console.log('ferry terminal selected', terminal.name)
    );
  }

  componentWillUnmount() {
    this._subscription_SelectFerryTerminal.remove();
  }

  render() {
    return <View style={styles.scene}>
      <NativeFerryMapView style={styles.map} {...this.props} />
    </View>;
  }
}

var NativeFerryMapView = requireNativeComponent('FerryMapView', FerryMapView);

export default FerryMapView;