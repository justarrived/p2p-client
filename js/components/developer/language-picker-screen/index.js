import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';

export default class LanguagePickerScreen extends Component {

  // Navigation information
  static navigationOptions = {
    tabBar: {
      label: 'Developer',
    },
    title: 'Language Picker',
  };

  // Render the component
  render() {
    return (
      <Container>
        <Content>
          <Text >Language Picker Screen</Text>
        </Content>
      </Container>
    );
  }
}
