import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';

import LanguagePicker from './languagePicker';

// Example screen containing a LanguagePicker
export default class LanguagePickerScreen extends Component {

  // Navigation information
  static navigationOptions = {
    title: 'Language Picker',
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
