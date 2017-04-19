import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';

import PlaceCard from './placeCard';
import TimeCard from './timeCard';
import CalendarCard from './calendarCard';
import GlobalStyle from '../../common/globalStyle';
import I18n from '../../../i18n';

export default class CreateJobScreen extends Component {

  static navigationOptions = {
    title: I18n.t('job.create_job'),
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
            <Text>{I18n.t('button_actions.next')}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
