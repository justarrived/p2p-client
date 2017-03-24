import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';

import PlaceCard from './placeCard';
import TimeCard from './timeCard';
import CalendarCard from './calendarCard';
import GlobalStyle from '../../common/globalStyle';

export default class CreateJobScreen extends Component {

  static navigationOptions = {
    title: 'Create Job',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content contentContainerStyle={GlobalStyle.padder}>
          <TimeCard />
          <PlaceCard />
          <CalendarCard />
          <Button full info onPress={() => navigate('LoginScreen')} />
        </Content>
      </Container>
    );
  }
}
