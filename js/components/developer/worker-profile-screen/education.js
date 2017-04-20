import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, CardItem } from 'native-base';
import WorkerProfileStyles from './workerProfileStyles';

export default class Education extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    education: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <CardItem bordered style={StyleSheet.flatten(WorkerProfileStyles.infoContainer)}>
        <View>
          <Text note>
            {this.props.title}
          </Text>
          <Text>
            {this.props.education}
          </Text>
        </View>
      </CardItem>
    );
  }
}
