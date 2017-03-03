import React from 'react';
import {AppRegistry} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';

import DeveloperScreen from './components/developer';
import HomeScreen from './components/home';
import SampleScreen from './components/sample';

// The home tab holding screens in a stack.
const HomeTab = StackNavigator({
	HomeScreen: {
		screen: HomeScreen
	}
});

// The developer tab holding screens in a stack.
const DeveloperTab = StackNavigator({
	DeveloperScreen: {
		screen: DeveloperScreen
	},
	SampleScreen: {
		screen: SampleScreen
	}
});

// Main navigation. Contains different tabs.
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
