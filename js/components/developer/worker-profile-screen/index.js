import React, { Component } from 'react';
import { Container, Tab, Tabs } from 'native-base';
import WorkerInfoScreen from '../worker-info-screen';
import ReferenceScreen from '../reference-screen';
import I18n from '../../../i18n';

// @TODO Replace temporary data with data from Redux/API
const NAME = 'John Doe';

export default class WorkerProfileScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screen_titles.worker_profile', { name: NAME }),
  };

  // TODO Replace placeholder data in WorkerInfoScreen and ReferenceScreen
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading={I18n.t('account.profile_tab')} >
            <WorkerInfoScreen />
          </Tab>
          <Tab heading={I18n.t('account.references')}>
            <ReferenceScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
