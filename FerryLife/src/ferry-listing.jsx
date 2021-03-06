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
    color: '#cccccc'
  },
  deselectedText: {
    color: '#666666'
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
  centerAlign: {
    textAlign: 'center'
  },
  primaryData: {
    color: '#ffffff',
    fontSize: 24
  },
  tappableText: {
    padding: 10
  }
});

class FerryListingView extends React.Component {

  constructor(props) {
    super(props);

    // getInitialState
    this.state = {
      journeys: null,
      query: {
        'time': currentRouteTime(),
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
          onPress={this.updateListing.bind(this, { time: 'weekday' })}>
          <Text style={[
            styles.text,
            styles.tappableText,
            styles.rightAlign,
            this.state.query.time !== 'weekday' ?
              styles.deselectedText : null ]}>Weekday</Text>
        </TouchableHighlight>
        <TouchableHighlight
          key='weekend-selector'
          style={styles.cell}
          onPress={this.updateListing.bind(this, { time: 'weekend' })}>
          <Text style={[
            styles.text,
            styles.tappableText,
            this.state.query.time !== 'weekend' ?
              styles.deselectedText : null ]}>Weekend</Text>
        </TouchableHighlight>
      </View>

      {this.renderJourneys()}
      
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={[
            styles.text,
            styles.centerAlign ]}>{'Effective 2015-04-27 through 2015-11-01'}</Text>
        </View>
      </View>
    </ScrollView>
  }

  renderJourneys() {
    var journeys = transformScheduleData(
      this.props.scheduleData,
      this.state.query );

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
      </TouchableHighlight>
    })

    if (journeyComponents.length === 0) {
      journeyComponents.push(
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={[styles.text, styles.centerAlign, styles.primaryData]}>{'No routes at this time.'}</Text>
          </View>
        </View>
      )
    } else {
      journeyComponents.unshift(
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.text}>{'Origin'}</Text>
          </View>
          <View style={styles.cell}>
            <Text style={[styles.text, styles.rightAlign]}>{'Destination'}</Text>
          </View>
        </View>
      )
    }

    return journeyComponents
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