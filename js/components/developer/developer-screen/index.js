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
          <Button onPress={() => navigate('CreateJobScreen')} title="Go to create job screen" />
          <Button onPress={() => navigate('LoginScreen')} title="Go to the login screen" />
          <Button onPress={() => navigate('FirebaseExampleScreen')} title="Firebase example screen" />
          <Button onPress={() => navigate('NetworkingScreen')} title="Get JSON data examples" />
          <Button onPress={() => navigate('CreateAccountScreen')} title="Create account screen" />
          <Button onPress={() => navigate('MyProfileScreen')} title="My Profile" />
          <Button onPress={() => navigate('ChooseJobTypeScreen')} title="Go to choose job type screen" />
          <Button onPress={() => navigate('ReduxSampleScreen')} title="Go to the redux sample screen" />
          <Button onPress={() => navigate('LanguagePickerScreen')} title="Language Picker example" />
          <Button onPress={() => navigate('ModalCardScreen')} title="Common Modal Card example" />
          <Button onPress={() => navigate('SearchListScreen')} title="Common searchable list example" />
          <Button onPress={() => navigate('PaymentInfoScreen')} title="Payment Info Screen" />
          <Button onPress={() => navigate('JobPreviewScreen')} title="Job creation preview screen" />
          <Button onPress={() => navigate('RateWorkScreen')} title="Rate work screen" />
          <Button onPress={() => navigate('MyJobsScreen')} title="Go to my jobs screen" />
          <Button onPress={() => navigate('ChooseLanguageScreen')} title="Choose Language" />
        </Content>
      </Container>
    );
  }
}
