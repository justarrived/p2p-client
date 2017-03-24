import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import JobTypeCard from './jobTypeCard';
import GlobalStyle from '../../common/globalStyle';

// Temporary constants. These will be moved and implemented in another way in the future!
const EXAMPLE_IMAGE_URL = 'https://facebook.github.io/react/img/logo_og.png';
const JOBS = ['Snöskottning', 'Lövkrattning', 'Städning', 'Ogräsrensning'];

export default class ChooseJobTypeScreen extends Component {
  static navigationOptions = {
    title: 'Choose Job Type',
  };

  render() {
    const { navigate } = this.props.navigation;
    // Creates a JobTypeCard for each job in the JOBS array.
    const jobTypeCards = JOBS.map((job, i) => <JobTypeCard
      key={job.concat(i)} title={job} subtitle={`Behöver du hjälp med ${job.toLowerCase()}?`}
      cover={EXAMPLE_IMAGE_URL} icon={EXAMPLE_IMAGE_URL}
      navigation={navigate}
    />);

    return (
      <Container>
        <Content contentContainerStyle={GlobalStyle.padder}>
          {jobTypeCards}
        </Content>
      </Container>
    );
  }
}
