import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import I18n from './i18n';
import { TabBarStyles, ACTIVE_TINT_COLOR, INACTIVE_TINT_COLOR } from './tabBarStyles';
import JATabIcon from './components/common/ja-tab-icon/JATabIcon';

import DeveloperScreen from './components/developer/developer-screen';
import CreateJobScreen from './components/developer/create-job-screen';
import MyProfileScreen from './components/developer/my-profile-screen';
import ChooseJobTypeScreen from './components/developer/choose-job-type-screen';
import LanguagePickerScreen from './components/developer/language-picker-screen';
import PaymentInfoScreen from './components/developer/payment-info-screen';
import ChooseLanguageScreen from './components/developer/choose-language-screen';
import MyJobsScreen from './components/developer/my-jobs-screen';
import JobPreviewScreen from './components/developer/job-preview-screen';
import RateWorkScreen from './components/developer/rate-work-screen';
import ChooseWorkerScreen from './components/developer/choose-worker-screen';
import JobInfoScreen from './components/developer/job-information-screen';
import ReferenceScreen from './components/developer/reference-screen';
import WorkerProfileScreen from './components/developer/worker-profile-screen';
import ForgotPassword from './components/developer/forgot-password';
import WelcomeInfoScreen from './components/developer/welcome-info-screen';
import ConfirmationScreen from './components/developer/confirmation-screen';
import SplashScreen from './components/developer/splash-screen';

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
}, {
  navigationOptions: {
    tabBarLabel: I18n.t('navigation_tabs.order_task'),
    tabBarIcon: ({ tintColor }) => JATabIcon({ name: 'add-circle', tintColor, count: 0 }),
  },
});

// TODO Replace sample badge count with real value.
const MyJobsTab = StackNavigator({
  MyJobsScreen: {
    screen: MyJobsScreen,
  },
  JobInfoScreen: {
    screen: JobInfoScreen,
  },
  WorkerProfileScreen: {
    screen: WorkerProfileScreen,
  },
}, {
  navigationOptions: {
    tabBarLabel: I18n.t('navigation_tabs.my_tasks'),
    tabBarIcon: ({ tintColor }) => JATabIcon({ name: 'briefcase', tintColor, count: 5 }),
  },
});

const MyProfileTab = StackNavigator({
  MyProfileScreen: {
    screen: MyProfileScreen,
  },
}, {
  navigationOptions: {
    tabBarLabel: I18n.t('navigation_tabs.my_profile'),
    tabBarIcon: ({ tintColor }) => JATabIcon({ name: 'person', tintColor, count: 0 }),
  },
});

// The developer tab holding screens in a stack.
const DeveloperTab = StackNavigator({
  DeveloperScreen: {
    screen: DeveloperScreen,
  },
  ConfirmationScreen: {
    screen: ConfirmationScreen,
  },
  WelcomeInfoScreen: {
    screen: WelcomeInfoScreen,
  },
  CreateJobScreen: {
    screen: CreateJobScreen,
  },
  SplashScreen: {
    screen: SplashScreen,
  },
  MyProfileScreen: {
    screen: MyProfileScreen,
  },
  ChooseJobTypeScreen: {
    screen: ChooseJobTypeScreen,
  },
  LanguagePickerScreen: {
    screen: LanguagePickerScreen,
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
  RateWorkScreen: {
    screen: RateWorkScreen,
  },
  ChooseWorkerScreen: {
    screen: ChooseWorkerScreen,
  },
  ForgotPassword: {
    screen: ForgotPassword,
  },
  JobInfoScreen: {
    screen: JobInfoScreen,
  },
  ReferenceScreen: {
    screen: ReferenceScreen,
  },
  WorkerProfileScreen: {
    screen: WorkerProfileScreen,
  },
}, {
  navigationOptions: {
    tabBarLabel: I18n.t('navigation_tabs.developer'),
    tabBarIcon: ({ tintColor }) => JATabIcon({ name: 'code', tintColor, count: 0 }),
  },
});

// Main navigation. Contains different tabs.
const AppNavigator = TabNavigator({
  CreateJobTab: {
    screen: CreateJobTab,
  },
  MyJobsTab: {
    screen: MyJobsTab,
  },
  MyProfileTab: {
    screen: MyProfileTab,
  },
/*  Developer: {
    screen: DeveloperTab,
  },*/
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    labelStyle: TabBarStyles.label,
    style: TabBarStyles.tabBar,
    indicatorStyle: TabBarStyles.indicator,
    activeTintColor: ACTIVE_TINT_COLOR,
    inactiveTintColor: INACTIVE_TINT_COLOR,
  },
  swipeEnabled: false,
});

export default AppNavigator;
