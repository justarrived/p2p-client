import React from 'react';
import {View, Button} from 'react-native';

export default class DeveloperScreen extends React.Component {
	static navigationOptions = {
		tabBar: {
			label: 'Developer'
		},
		title: 'Developer'
	};

	render() {
		const {navigate} = this.props.navigation;
		return (
			<View>
				<Button onPress={() => navigate('SampleScreen')} title="Go to the sample screen"/>
			</View>
		);
	}
}
