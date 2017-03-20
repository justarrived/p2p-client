import { StackNavigator, TabNavigator } from 'react-navigation';

import DeveloperScreen from './components/developer/developer-screen';
import HomeScreen from './components/home/home-screen';
import SampleScreen from './components/developer/sample-screen';
import LoginScreen from './components/developer/login-screen';
import ReduxSampleScreen from './components/developer/redux-sample-screen';
import NetworkingScreen from './components/developer/networking-screen';
import MyProfileScreen from './components/developer/my-profile-screen';
import ChooseJobTypeScreen from './components/developer/choose-job-type-screen';
import PaymentInfoScreen from './components/developer/payment-info-screen';
import MyJobs from './components/developer/my-jobs';


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
  LoginScreen: {
    screen: LoginScreen,
  },
  NetworkingScreen: {
    screen: NetworkingScreen,
  },
  MyProfileScreen: {
    screen: MyProfileScreen,
  },
  ChooseJobTypeScreen: {
    screen: ChooseJobTypeScreen,
  },
  ReduxSampleScreen: {
    screen: ReduxSampleScreen,
  },
  PaymentInfoScreen: {
    screen: PaymentInfoScreen,
  },
  MyJobs: {
    screen: MyJobs,
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
