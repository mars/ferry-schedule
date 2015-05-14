import React from 'react-native';
import FerryListingView from './ferry-listing';

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
      terminal => this.transitionToFerryListing(terminal.name)
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

  transitionToFerryListing(terminalName) {
    this.props.navigator.push({
      component: FerryListingView,
      title: 'Marin-SF Ferry Schedules',
      passProps: {
        scheduleData: this.props.scheduleData,
        terminalName: terminalName
      }
    })
  }
}

FerryMapView.propTypes = {
  scheduleData: React.PropTypes.object
}

var NativeFerryMapView = requireNativeComponent('FerryMapView', FerryMapView);

export default FerryMapView;