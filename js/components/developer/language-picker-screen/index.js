import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';

import LanguagePicker from './languagePicker';
import I18n from '../../../i18n';

// Example screen containing a LanguagePicker
export default class LanguagePickerScreen extends Component {

  // Navigation information
  static navigationOptions = {
    title: I18n.t('screen_titles.choose_language'),
  };

  // Render the component
  render() {
    return (
      <Container>
        <Content>
          <Text >Content b4 picker</Text>
          <LanguagePicker />
          <Text >Content after picker start</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker</Text>
          <Text >Content after picker end</Text>
        </Content>
      </Container>
    );
  }
}
