import React, { Component } from 'react';
import { Container, Tab, Tabs } from 'native-base';
import JobPreviewScreen from '../job-preview-screen';
import ChooseWorkerScreen from '../choose-worker-screen';


export default class MyProfileScreen extends Component {
  static navigationOptions = {
    title: 'Mina Uppdrag',
  };

  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="Uppdrags info" >
            <JobPreviewScreen />
          </Tab>
          <Tab heading="Ansökningar">
            <ChooseWorkerScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
