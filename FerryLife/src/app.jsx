import React from 'react-native';
import FerryMapView from './ferry-map';
import scheduleData from 'ferry-life-base/collector/current-data';

let {
  AppRegistry,
  NavigatorIOS,
  StyleSheet } = React;

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  route: {
    paddingTop: 74,
    backgroundColor: '#333333'
  }
});

let FerryLife = React.createClass({

  render() {
    return (
      // <FerryMapView />
      <NavigatorIOS
        ref='nav'
        initialRoute={{
          component: FerryMapView,
          title: 'Marin-SF Ferry Schedules',
          passProps: { scheduleData: scheduleData }
        }}
        barTintColor='#333333'
        tintColor='#FFFFFF'
        titleTextColor='#CCCCCC'
        style={styles.container}
        itemWrapperStyle={styles.route}
      />
    )
  }

});

AppRegistry.registerComponent('FerryLife', () => FerryLife);