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
  }
});

class FerryListingView extends React.Component {

  render() {
    console.log('this.props.scheduleData', this.props.scheduleData);
    return <ScrollView style={styles.scene} {...this.props} >
      <Text>{currentRouteTime()} schedule</Text>
      {this.renderJourneys()}
    </ScrollView>;
  }

  renderJourneys() {
    var journeys = transformScheduleData(this.props.scheduleData, {
      'location-name': this.props.terminalName
    })

    var journeyComponents = journeys.map( j => {
      return <TouchableHighlight key={j.id}>
        <Text>{j.location} {j.time} --- {j.location2} {j.time2}</Text>
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