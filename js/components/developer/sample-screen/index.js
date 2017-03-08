import React, {} from 'react';
import { Text } from 'react-native';
import I18n from '../../../I18n';

export default class SampleScreen extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: I18n.t('dev'),
    },
    title: 'Sample Screen',
  };

  render() {
    return <Text>{I18n.t('greeting')}</Text>;
  }
}
