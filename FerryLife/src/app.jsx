import React from 'react-native';
import MapView from './map';

let { AppRegistry, StyleSheet, Text, View } = React;

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

let FerryLife = React.createClass({

  render() {

    return (
      <MapView style={styles.container} {...this.props} />
    );
  }
});

AppRegistry.registerComponent('FerryLife', () => FerryLife);