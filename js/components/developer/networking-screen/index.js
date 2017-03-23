import React, { Component } from 'react';
import { Tab, Tabs } from 'native-base';

import MovieExample from './movieExample';
import WebAppJobs from './webAppJobs';

export default class NetworkingScreen extends Component {

  // Navigation information
  static navigationOptions = {
    title: 'Networking Screen',
  };

  // Render the component
  render() {
    return (
      <Tabs>
        <Tab heading="Just Arrived Jobs">
          <WebAppJobs />
        </Tab>
        <Tab heading="Static Movies">
          <MovieExample />
        </Tab>
      </Tabs>
    );
  }
}
