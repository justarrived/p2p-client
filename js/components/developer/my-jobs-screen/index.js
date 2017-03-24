import React, { Component } from 'react';
import { Tab, Tabs } from 'native-base';
import MyJobsTab from './myJobsTab';
import { JOB_STATUS } from '../../common/constants';

// Temporary example data for active jobs.
const activeJobsData = [
  { title: 'Pågående uppdrag',
    jobs: [
      { title: 'Snöskottning', date: '14 April 20:00', status: JOB_STATUS.ACTIVE },
      { title: 'Gräsklippning', date: '11 Maj 10:00', status: JOB_STATUS.ACTIVE },
    ],
  },
  { title: 'Ej tilldelade uppdrag',
    jobs: [
      { title: 'Snöskottning', date: '2 December 19:00', status: JOB_STATUS.UNASSIGNED },
    ],
  },
];

// Temporary example data for archived jobs.
const archivedJobsData = [
  { title: 'Avslutade uppdrag',
    jobs: [
      { title: 'Snöskottning', date: '14 Januari 18:00', status: JOB_STATUS.FINISHED },
    ],
  },
];

export default class MyJobsScreen extends Component {
  static navigationOptions = {
    title: 'Mina Uppdrag',
  };

  render() {
    return (
      <Tabs>
        <Tab heading="Pågående">
          <MyJobsTab data={activeJobsData} />
        </Tab>
        <Tab heading="Avslutade">
          <MyJobsTab data={archivedJobsData} />
        </Tab>
      </Tabs>
    );
  }
}
