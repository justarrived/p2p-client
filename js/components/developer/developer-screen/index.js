import React from 'react';
import { View, Button } from 'react-native';

/*
Developer screen.
Provides access to components during development.
*/
export default class DeveloperScreen extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Developer',
    },
    title: 'Developer',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button onPress={() => navigate('SampleScreen')} title="Go to the sample screen" />
        <Button onPress={() => navigate('NetworkingScreen')} title="Get JSON data examples" />
        <Button onPress={() => navigate('MakePaymentScreen')} title="Pay your order" />
        <Button onPress={() => navigate('ReduxSampleScreen')} title="Go to the redux sample screen" />
      </View>
    );
  }
}
