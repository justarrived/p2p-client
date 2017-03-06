import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import PlaceCard from './placeCard';
import TimeCard from './timeCard';
import CalendarCard from './calendarCard';

export default class CreateJob extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'Developer',
    },
    title: 'Create Job',
  };

  render() {
    return (
      <Container>
        <Content>
          <TimeCard />
          <PlaceCard />
          <CalendarCard />
        </Content>
      </Container>
    );
  }
}
