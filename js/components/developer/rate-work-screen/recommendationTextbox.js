import React, { Component } from 'react';
import { View } from 'react-native';
import AutoExpandingTextInput from '../../common/auto-expanding-text-input/autoExpandingTextInput';

export default class RateWorkScreen extends Component {

  static propTypes = {
    placeholder: React.PropTypes.string.isRequired,
  }

  render() {
    return (

      // TODO Fix keyboard covering new lines
      <View>
        <AutoExpandingTextInput
          returnKeyType="done"
          placeholder={this.props.placeholder}
        />
      </View>
    );
  }
}
