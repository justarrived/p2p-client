import React, { Component } from 'react';
import { Container, Tab, Tabs } from 'native-base';
import JobInspectScreen from '../job-inspect-screen';
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
          <Tab heading={I18n.t('job.job_details')} >
            <JobInspectScreen />
          </Tab>
          <Tab heading={I18n.t('job.applications')}>
            <ChooseWorkerScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
