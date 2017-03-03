import React from 'react';
import {AppRegistry} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';

import DeveloperScreen from './components/developer';
import HomeScreen from './components/home';
import SampleScreen from './components/sample';

const HomeTab = StackNavigator({
	HomeScreen: {
		screen: HomeScreen
	}
});

const DeveloperTab = StackNavigator({
	DeveloperScreen: {
		screen: DeveloperScreen
	},
	SampleScreen: {
		screen: SampleScreen
	}
});

const AppNavigator = TabNavigator({
	HomeTab: {
		screen: HomeTab
	},
	DeveloperTab: {
		screen: DeveloperTab
	}
}, {
	tabBarPosition: 'bottom',
	tabBarOptions: {
		activeTintColor: '#e91e63'
	}
});

export default AppNavigator;
