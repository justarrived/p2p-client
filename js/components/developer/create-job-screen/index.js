import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';

import PlaceCard from './placeCard';
import TimeCard from './timeCard';
import CalendarCard from './calendarCard';
import GlobalStyle from '../../common/globalStyle';

export default class CreateJobScreen extends Component {

  static navigationOptions = {
    title: 'Create Job',
  };

  // here we want a check if we already are loggedin
  toNextScreen() {
    this.props.navigation.navigate('LoginScreen', { nextScreen: 'JobPreviewScreen' });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content contentContainerStyle={GlobalStyle.padder}>
          <TimeCard />
          <PlaceCard />
          <CalendarCard />
          <Button full info onPress={() => this.toNextScreen()}>
            <Text>Nästa</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
