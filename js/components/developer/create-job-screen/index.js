import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';

import PlaceCard from './placeCard';
import TimeCard from './timeCard';
import CalendarCard from './calendarCard';
import GlobalStyle from '../../../resources/globalStyle';
import I18n from '../../../i18n';

export default class CreateJobScreen extends Component {

  static navigationOptions = {
    title: I18n.t('job.order_task'),
  };

  goToJobPreview = () => (
    this.props.navigation.navigate('JobPreviewScreen')
  );

  render() {
    return (
      <Container>
        <Content contentContainerStyle={GlobalStyle.padder}>
          <TimeCard />
          <CalendarCard />
          <PlaceCard />
          <Button full info onPress={() => this.goToJobPreview()}>
            <Text>{I18n.t('button_actions.next')}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
