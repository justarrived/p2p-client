import { StackNavigator, TabNavigator } from 'react-navigation';

import DeveloperScreen from './components/developer/developer-screen';
import HomeScreen from './components/home/home-screen';
import SampleScreen from './components/developer/sample-screen';
import NetworkingScreen from './components/developer/networking-screen';
import MakePaymentScreen from './components/developer/make-payment-screen';
import RateWorkScreen from './components/developer/rate-work-screen';

// The home tab holding screens in a stack.
const HomeTab = StackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
});

// The developer tab holding screens in a stack.
const DeveloperTab = StackNavigator({
  DeveloperScreen: {
    screen: DeveloperScreen,
  },
  SampleScreen: {
    screen: SampleScreen,
  },
  NetworkingScreen: {
    screen: NetworkingScreen,
  },
  MakePaymentScreen: {
    screen: MakePaymentScreen,
  },
  RateWorkScreen: {
    screen: RateWorkScreen,
  },
});

// Main navigation. Contains different tabs.
const AppNavigator = TabNavigator({
  HomeTab: {
    screen: HomeTab,
  },
  DeveloperTab: {
    screen: DeveloperTab,
  },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default AppNavigator;
