import React, { Component } from 'react';
import { Container, Tab, Tabs, Text } from 'native-base';
import WorkerInfoScreen from '../worker-info-screen';
import I18n from '../../../i18n';

// @TODO Replace temporary data with data from Redux/API
const NAME = 'John Doe';

export default class WorkerProfileScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screen_titles.worker_profile', { name: NAME }),
  };

  // TODO Replace reference placeholder text with reference screen.
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading={I18n.t('account.profile_info')} >
            <WorkerInfoScreen />
          </Tab>
          <Tab heading={I18n.t('account.references')}>
            <Text>References screen goes here</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
