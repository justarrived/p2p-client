import { StackNavigator, TabNavigator } from 'react-navigation';

import DeveloperScreen from './components/developer/developer-screen';
import CreateJobScreen from './components/developer/create-job-screen';
import LoginScreen from './components/developer/login-screen';
import ReduxSampleScreen from './components/developer/redux-sample-screen';
import NetworkingScreen from './components/developer/networking-screen';
import NetworkingLoginScreen from './components/developer/networking-login-screen';
import CreateAccountScreen from './components/developer/create-account-screen';
import MyProfileScreen from './components/developer/my-profile-screen';
import ChooseJobTypeScreen from './components/developer/choose-job-type-screen';
import LanguagePickerScreen from './components/developer/language-picker-screen';
import ModalCardScreen from './components/developer/modal-card-screen';
import SearchListScreen from './components/developer/search-list-screen';
import PaymentInfoScreen from './components/developer/payment-info-screen';
import ChooseLanguageScreen from './components/developer/choose-language-screen';
import MyJobsScreen from './components/developer/my-jobs-screen';
import JobPreviewScreen from './components/developer/job-preview-screen';
import RateWorkScreen from './components/developer/rate-work-screen';
import FirebaseExampleScreen from './components/developer/firebase-example-screen';
import ChooseWorkerScreen from './components/developer/choose-worker-screen';
import JobInfoScreen from './components/developer/job-information-screen';
import WorkerInfoScreen from './components/developer/worker-profile-screen';
import I18n from './i18n';

import TabBarStyles from './tabBarStyles';

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
      label: I18n.t('screen_titles.create_job'),
    },
  },
});

const MyJobTab = StackNavigator({
  MyJobsScreen: {
    screen: MyJobsScreen,
  },
  JobInfoScreen: {
    screen: JobInfoScreen,
  },
}, {
  navigationOptions: {
    tabBar: {
      label: I18n.t('screen_titles.my_jobs'),
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
      label: I18n.t('screen_titles.my_profile'),
    },
  },
});

// The developer tab holding screens in a stack.
const DeveloperTab = StackNavigator({
  DeveloperScreen: {
    screen: DeveloperScreen,
  },
  CreateJobScreen: {
    screen: CreateJobScreen,
  },
  LoginScreen: {
    screen: LoginScreen,
  },
  FirebaseExampleScreen: {
    screen: FirebaseExampleScreen,
  },
  NetworkingScreen: {
    screen: NetworkingScreen,
  },
  NetworkingLoginScreen: {
    screen: NetworkingLoginScreen,
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
  ChooseLanguageScreen: {
    screen: ChooseLanguageScreen,
  },
  MyJobsScreen: {
    screen: MyJobsScreen,
  },
  JobPreviewScreen: {
    screen: JobPreviewScreen,
  },
  CreateAccountScreen: {
    screen: CreateAccountScreen,
  },
  RateWorkScreen: {
    screen: RateWorkScreen,
  },
  ChooseWorkerScreen: {
    screen: ChooseWorkerScreen,
  },
  JobInfoScreen: {
    screen: JobInfoScreen,
  },
  WorkerInfoScreen: {
    screen: WorkerInfoScreen,
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
  Developer: {
    screen: DeveloperTab,
  },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    labelStyle: TabBarStyles.label,
    style: TabBarStyles.tabBar,
    indicatorStyle: TabBarStyles.indicator,
  },
  swipeEnabled: false,
});

export default AppNavigator;
