import React from 'react';
import { Button } from 'react-native';
import { Container, Content } from 'native-base';

/*
Developer screen.
Provides access to components during development.
*/
export default class DeveloperScreen extends React.Component {
  static navigationOptions = {
    title: 'Developer',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <Button onPress={() => navigate('WelcomeInfoScreen')} title="Welcome Screen" />
          <Button onPress={() => navigate('ConfirmationScreen')} title="Confirmation Screen" />
          <Button onPress={() => navigate('SplashScreen')} title="Splash Screen" />
          <Button onPress={() => navigate('JobInfoScreen')} title="Job Info Screen" />
          <Button onPress={() => navigate('WorkerInfoScreen')} title="Show Worker Info" />
          <Button onPress={() => navigate('CreateJobScreen')} title="Go to create job screen" />
          <Button onPress={() => navigate('LoginScreen')} title="Go to the login screen" />
          <Button onPress={() => navigate('CreateAccountScreen')} title="Create account screen" />
          <Button onPress={() => navigate('MyProfileScreen')} title="My Profile" />
          <Button onPress={() => navigate('ChooseJobTypeScreen')} title="Go to choose job type screen" />
          <Button onPress={() => navigate('LanguagePickerScreen')} title="Language Picker example" />
          <Button onPress={() => navigate('PaymentInfoScreen')} title="Payment Info Screen" />
          <Button onPress={() => navigate('JobPreviewScreen')} title="Job creation preview screen" />
          <Button onPress={() => navigate('RateWorkScreen')} title="Rate work screen" />
          <Button onPress={() => navigate('MyJobsScreen')} title="Go to my jobs screen" />
          <Button onPress={() => navigate('ChooseLanguageScreen')} title="Choose Language" />
          <Button onPress={() => navigate('ReferenceScreen')} title="Reference Screen" />
          <Button onPress={() => navigate('ForgotPassword')} title="Forgot Password" />
        </Content>
      </Container>
    );
  }
}
