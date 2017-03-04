import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Tab, Tabs  } from 'native-base';
import MovieExample from './movieExample';

export default class NetworkingScreen extends Component {

  // Navigation information
  static navigationOptions = {
		tabBar: {
			label: 'Developer'
		},
		title: 'Networking Screen'
	};

  // Render the component
  render() {
		return (
      <Tabs>
        <Tab heading="Some Tab">
          <Text>Tab awaiting new content</Text>
        </Tab>
        <Tab heading="Movies">
          <MovieExample />
        </Tab>
      </Tabs>
		);
  }
}
