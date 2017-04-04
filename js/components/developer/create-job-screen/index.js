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
  navigateToNextScreen = () => (
    this.props.navigation.navigate('LoginScreen', { nextScreen: 'JobPreviewScreen' })
  );

  render() {
    return (
      <Container>
        <Content contentContainerStyle={GlobalStyle.padder}>
          <TimeCard />
          <CalendarCard />
          <PlaceCard />
          <Button full info onPress={() => this.navigateToNextScreen()}>
            <Text>Nästa</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
