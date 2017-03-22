import React from 'react';
import { View, Button } from 'react-native';

/*
Developer screen.
Provides access to components during development.
*/
export default class DeveloperScreen extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Developer',
    },
    title: 'Developer',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button onPress={() => navigate('SampleScreen')} title="Go to the sample screen" />
        <Button onPress={() => navigate('CreateJobScreen')} title="Go to create job screen" />
        <Button onPress={() => navigate('LoginScreen')} title="Go to the login screen" />
        <Button onPress={() => navigate('NetworkingScreen')} title="Get JSON data examples" />
        <Button onPress={() => navigate('MakePaymentScreen')} title="Pay your order" />
        <Button onPress={() => navigate('MyProfileScreen')} title="My Profile" />
        <Button onPress={() => navigate('CreateAccountScreen')} title="Create accout screen" />
        <Button onPress={() => navigate('MyProfileScreen')} title="My Profile" />
        <Button onPress={() => navigate('ChooseJobTypeScreen')} title="Go to choose job type screen" />
        <Button onPress={() => navigate('ReduxSampleScreen')} title="Go to the redux sample screen" />
        <Button onPress={() => navigate('LanguagePickerScreen')} title="Language Picker example" />
        <Button onPress={() => navigate('ModalCardScreen')} title="Common Modal Card example" />
        <Button onPress={() => navigate('SearchListScreen')} title="Common searchable list example" />
        <Button onPress={() => navigate('PaymentInfoScreen')} title="Payment Info Screen" />
      </View>
    );
  }
}
