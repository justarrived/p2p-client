import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, CardItem } from 'native-base';
import I18n from '../../../i18n';
import WorkerProfileStyles from './workerProfileStyles';

export default class PreviousWork extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    prevWork: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <CardItem bordered style={StyleSheet.flatten(WorkerProfileStyles.infoContainer)}>
        <View>
          <Text note>
            {this.props.title}
          </Text>
          <Text>
            {this.props.prevWork}
          </Text>
        </View>
      </CardItem>
    );
  }
}
