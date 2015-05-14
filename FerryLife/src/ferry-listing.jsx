import React from 'react-native';

let {
  StyleSheet,
  Text,
  View } = React;

let styles = StyleSheet.create({
  scene: {
    flex: 1
  }
});

class FerryListingView extends React.Component {

  render() {
    return <View style={styles.scene} {...this.props} >
      <Text>{this.props.terminalName ? this.props.terminalName : 'All Routes'}</Text>
    </View>;
  }
}

FerryListingView.propTypes = {
  terminalName: React.PropTypes.string
}

export default FerryListingView;