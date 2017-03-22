import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import PlaceCard from './placeCard';
import TimeCard from './timeCard';
import CalendarCard from './calendarCard';
import CreateJobStyles from './createJobStyles';

export default class CreateJobScreen extends Component {

  static navigationOptions = {
    title: 'Create Job',
  };

  render() {
    return (
      <Container>
        <Content contentContainerStyle={CreateJobStyles.padder}>
          <TimeCard />
          <PlaceCard />
          <CalendarCard />
        </Content>
      </Container>
    );
  }
}
