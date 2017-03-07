import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import JobTypeCard from './jobTypeCard';

// Temporary constants. These will be moved and implemented in another way in the future!
const EXAMPLE_IMAGE_URL = 'https://facebook.github.io/react/img/logo_og.png';
const JOBS = ['Snöskottning', 'Lövkrattning', 'Städning', 'Ogräsrensning'];

export default class ChooseJobTypeScreen extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'Developer',
    },
    title: 'Choose Job Type',
  };

  render() {
    // Creates a JobTypeCard for each job in the JOBS array.
    const jobTypeCards = JOBS.map((job, i) => <JobTypeCard key={job.concat(i)} title={job} subtitle={`Behöver du hjälp med ${job.toLowerCase()}?`} cover={EXAMPLE_IMAGE_URL} icon={EXAMPLE_IMAGE_URL} />);

    return (
      <Container>
        <Content>
          {jobTypeCards}
        </Content>
      </Container>
    );
  }
}
