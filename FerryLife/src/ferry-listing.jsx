import React from 'react-native';
import _ from 'lodash';

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

  constructor(props) {
    super(props);

    // getInitialState
    this.state = {
      journeys: null,
      query: {
        'time': null,
        'location-name': props.terminalName,
        'location-filter': null
      }
    }
  }

  render() {
    return <ScrollView style={styles.scene} {...this.props} >
      <View style={styles.row}>
        <TouchableHighlight
          key='weekday-selector'
          style={styles.cell}
          onPress={this.updateListing.bind(null, { time: 'weekday' })}>
          <Text style={styles.text}>Weekday</Text>
        </TouchableHighlight>
        <TouchableHighlight
          key='weekend-selector'
          style={styles.cell}
          onPress={this.updateListing.bind(null, { time: 'weekend' })}>
          <Text style={styles.text}>Weekend</Text>
        </TouchableHighlight>
      </View>
      {this.renderJourneys()}
    </ScrollView>
  }

  renderJourneys() {
    var journeys = transformScheduleData(
      this.props.scheduleData,
      this.state.query );

    return journeys.map( j => {
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
      </TouchableHighlight>
    })
  }

  updateListing(scheduleDataQuery) {
    var query = _.assign({}, this.state.query, scheduleDataQuery)
    this.setState({ query })
  }
}

FerryListingView.propTypes = {
  scheduleData: React.PropTypes.object,
  terminalName: React.PropTypes.string
}

export default FerryListingView;