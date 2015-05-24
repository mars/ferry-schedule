import React from 'react-native';
import FerryListingView from './ferry-listing';

let {
  DeviceEventEmitter,
  requireNativeComponent,
  StyleSheet,
  Text,
  View } = React;

let styles = StyleSheet.create({
  scene: {
    flex: 1,
    paddingTop: 74
  },
  map: {
    flex: 1,
    alignSelf: 'stretch'
  },
  text: {
    color: '#CCCCCC'
  },
  column: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    padding: 10
  },
  cell: {
    flex: 1
  },
  centerAlign: {
    textAlign: 'center'
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
      <View style={styles.column}>
        <View style={styles.cell}>
          <Text style={[
            styles.text,
            styles.centerAlign ]}>{'Effective 2015-04-27 through 2015-11-01'}</Text>
        </View>
      </View>
    </View>;
  }

  transitionToFerryListing(terminalName) {
    var terminalTitle = _.result( _.find(
        this.props.scheduleData.linked.locations,
        { id: terminalName }
    ), 'name')
    if (terminalTitle == null) {
      throw new Error(`Schedule data does not contain that terminal: ${terminalName}`)
    }
    this.props.navigator.push({
      component: FerryListingView,
      title: terminalTitle,
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