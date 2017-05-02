import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import I18n from '../../../i18n';
import AutoExpandingTextInput from '../../common/auto-expanding-text-input/autoExpandingTextInput';
import RatingScreenStyles from './rateWorkStyles';

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
