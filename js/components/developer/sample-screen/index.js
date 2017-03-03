import React from 'react';
import {Text} from 'react-native';

export default class SampleScreen extends React.Component {
	static navigationOptions = {
		tabBar: {
			label: 'Developer'
		},
		title: 'Sample Screen'
	};

	render() {
		return <Text>This is the sample screen!</Text>;
	}
}