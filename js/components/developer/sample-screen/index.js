import React, { Component } from 'react';
import { Text } from 'react-native';
import I18n from '../../../../I18n/components/developer/sample-screen/I18n';

export default class SampleScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screenTitle'),
  };

  render() {
    return <Text>{I18n.t('greeting')}</Text>;
  }
}
