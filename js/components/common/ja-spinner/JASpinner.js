import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { Spinner } from 'native-base';
import { JASpinnerStyle, JASpinnerColor } from './JASpinnerStyle';

export default class JASpinner extends Component {
  static propTypes = {
    color: PropTypes.string,
  }

  static defaultProps = {
    color: JASpinnerColor,
  }

  render() {
    return (
      <View style={JASpinnerStyle.container}>
        <Spinner color={this.props.color} />
      </View>
    );
  }
}
