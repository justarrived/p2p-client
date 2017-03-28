import React, { Component } from 'react';
import { Container, Content, List } from 'native-base';

import JobTypeCard from './jobTypeCard';
import GlobalStyle from '../../common/globalStyle';

// Temporary constants. These will be moved and implemented in another way in the future!
const EXAMPLE_IMAGE_URL = 'https://facebook.github.io/react/img/logo_og.png';
const JOB_TYPES = ['Snöskottning', 'Lövkrattning', 'Städning', 'Ogräsrensning'];

export default class ChooseJobTypeScreen extends Component {
  static navigationOptions = {
    title: 'Choose Job Type',
  };

  renderRow = jobType => (
    <JobTypeCard
      title={jobType} subtitle={`Behöver du hjälp med ${jobType.toLowerCase()}?`}
      cover={EXAMPLE_IMAGE_URL} icon={EXAMPLE_IMAGE_URL}
      navigation={this.props.navigation}
    />
  );

  render() {
    return (
      <Container>
        <Content contentContainerStyle={GlobalStyle.padder}>
          <List dataArray={JOB_TYPES} renderRow={this.renderRow} />
        </Content>
      </Container>
    );
  }
}
