import React, { Component } from 'react';
import { Tab, Tabs } from 'native-base';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

export default class MyJobs extends Component {

  // Navigation information
  static navigationOptions = {
    tabBar: {
      label: 'Developer',
    },
    title: 'Mina Uppdrag',
  };

  // Render the component
  render() {
    return (
      <Tabs>
        <Tab heading="Tab 1">
          <Tab1 />
        </Tab>
        <Tab heading="Tab 2">
          <Tab2 />
        </Tab>
        <Tab heading="Tab 3">
          <Tab3 />
        </Tab>
      </Tabs>
    );
  }
}
