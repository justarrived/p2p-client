import React from 'react';
import { Text } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Home',
    },
    title: 'Home',
  };

  render() {
    return <Text>This is the home screen!</Text>;
  }
}
