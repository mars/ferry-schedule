import React from 'react-native';
import FerryMapView from './ferry-map';

let { AppRegistry, StyleSheet, Text, View } = React;

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    fontSize: 12,
    textAlign: 'center',
    margin: 20
  },
  map: {
    flex: 10,
    height: 405,
    width: 325,
    backgroundColor: 'transparent'
  }
});

let FerryLife = React.createClass({

  render() {

    return (

      <View style={styles.container}>
        <Text style={styles.title}>
          Marin-San Francisco Ferry Schedules
        </Text>
        <FerryMapView style={styles.map} {...this.props} />
      </View>
    );
  }
});

AppRegistry.registerComponent('FerryLife', () => FerryLife);