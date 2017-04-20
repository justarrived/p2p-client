import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, CardItem } from 'native-base';
import WorkerProfileStyles from './workerProfileStyles';

export default class Languages extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    presentation: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <CardItem bordered style={StyleSheet.flatten(WorkerProfileStyles.infoContainer)}>
        <View>
          <Text note>
            {this.props.title}
          </Text>
          <Text>
            {this.props.presentation}
          </Text>
        </View>
      </CardItem>
    );
  }
}
