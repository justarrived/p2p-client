import { StackNavigator, TabNavigator } from 'react-navigation';

import DeveloperScreen from './components/developer/developer-screen';
import HomeScreen from './components/home/home-screen';
import SampleScreen from './components/developer/sample-screen';
import CreateJobScreen from './components/developer/create-job-screen';
import LoginScreen from './components/developer/login-screen';
import ReduxSampleScreen from './components/developer/redux-sample-screen';
import NetworkingScreen from './components/developer/networking-screen';
import CreateAccountScreen from './components/developer/create-account-screen';
import MyProfileScreen from './components/developer/my-profile-screen';
import ChooseJobTypeScreen from './components/developer/choose-job-type-screen';
import LanguagePickerScreen from './components/developer/language-picker-screen';
import ModalCardScreen from './components/developer/modal-card-screen';
import SearchListScreen from './components/developer/search-list-screen';
import PaymentInfoScreen from './components/developer/payment-info-screen';
import JobPreviewScreen from './components/developer/job-preview-screen';

// The home tab holding screens in a stack.
const CreateJobTab = StackNavigator({
  ChooseJobTypeScreen: {
    screen: ChooseJobTypeScreen,
  },
  CreateJobScreen: {
    screen: CreateJobScreen,
  },
  JobPreviewScreen: {
    screen: JobPreviewScreen,
  },
  LoginScreen: {
    screen: LoginScreen,
  },
  CreateAccountScreen: {
    screen: CreateAccountScreen,
  },
}, {
  navigationOptions: {
    tabBar: {
      label: 'Skapa uppdrag',
    },
  },
});

const MyJobTab = StackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
}, {
  navigationOptions: {
    tabBar: {
      label: 'Mina uppdrag',
    },
  },
});

const MyProfileTab = StackNavigator({
  LoginScreen: {
    screen: LoginScreen,
  },
  MyProfileScreen: {
    screen: MyProfileScreen,
  },
  CreateAccountScreen: {
    screen: CreateAccountScreen,
  },
}, {
  navigationOptions: {
    tabBar: {
      label: 'Min Profil',
    },
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
  CreateJobScreen: {
    screen: CreateJobScreen,
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
  LanguagePickerScreen: {
    screen: LanguagePickerScreen,
  },
  ModalCardScreen: {
    screen: ModalCardScreen,
  },
  SearchListScreen: {
    screen: SearchListScreen,
  },
  PaymentInfoScreen: {
    screen: PaymentInfoScreen,
  },
  JobPreviewScreen: {
    screen: JobPreviewScreen,
  },
  CreateAccountScreen: {
    screen: CreateAccountScreen,
  },
}, {
  navigationOptions: {
    tabBar: {
      label: 'Developer',
    },
  },
});

// Main navigation. Contains different tabs.
const AppNavigator = TabNavigator({
  CreateJobTab: {
    screen: CreateJobTab,
  },
  MyJobsTab: {
    screen: MyJobTab,
  },
  MyProfileTab: {
    screen: MyProfileTab,
  },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
  swipeEnabled: false,
});

export default AppNavigator;
