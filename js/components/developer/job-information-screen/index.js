import React, { Component } from 'react';
import { Container, Tab, Tabs } from 'native-base';
import JobPreviewScreen from '../job-preview-screen';
import ChooseWorkerScreen from '../choose-worker-screen';
import I18n from '../../../i18n';

export default class JobsInformationScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screen_titles.my_jobs'),
  };

  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading={I18n.t('job.jobs')} >
            <JobPreviewScreen />
          </Tab>
          <Tab heading={I18n.t('job.applications')}>
            <ChooseWorkerScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
