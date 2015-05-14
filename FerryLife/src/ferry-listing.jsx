import React from 'react-native';

import currentRouteTime from 'ferry-life-base/source/util/current-route-time';
import transformScheduleData from 'ferry-life-base/source/util/transform-schedule-data';

let {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View } = React;

let styles = StyleSheet.create({
  scene: {
    flex: 1
  },
  text: {
    color: '#FFFFFF'
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    padding: 10
  },
  cell: {
    flex: 1
  },
  rightAlign: {
    textAlign: 'right'
  },
  primaryData: {
    fontSize: 18
  }
});

class FerryListingView extends React.Component {

  render() {
    return <ScrollView style={styles.scene} {...this.props} >
      <View style={styles.row}>
        <Text style={styles.text}>{currentRouteTime()} schedule</Text>
      </View>
      {this.renderJourneys()}
    </ScrollView>;
  }

  renderJourneys() {
    var journeys = transformScheduleData(this.props.scheduleData, {
      'location-name': this.props.terminalName
    })

    var journeyComponents = journeys.map( j => {
      return <TouchableHighlight key={j.id}>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.text}>{j.location.name}</Text>
            <Text style={[styles.text, styles.primaryData]}>{j.time.format('h:mm a')}</Text>
          </View>
          <View style={styles.cell}>
            <Text style={[styles.text, styles.rightAlign]}>{j.location2.name}</Text>
            <Text style={[styles.text, styles.rightAlign, styles.primaryData]}>{j.time2.format('h:mm a')}</Text>
          </View>
        </View>
      </TouchableHighlight>;
    })

    return journeyComponents;
  }
}

FerryListingView.propTypes = {
  scheduleData: React.PropTypes.object,
  terminalName: React.PropTypes.string
}

export default FerryListingView;