import React, { Component } from 'react';
import { Container, Content, Card } from 'native-base';

import JobTypeCardPreview from './jobTypeCardPreview';
import TimeCardPreview from './timeCardPreview';
import PlaceCardPreview from './placeCardPreview';
import CalendarCardPreview from './calendarCardPreview';
import GlobalStyle from '../../common/globalStyle';

// Temporary constants. These will be moved and implemented in another way in the future!
const EXAMPLE_IMAGE_URL = 'https://facebook.github.io/react/img/logo_og.png';

// Screen shown during job creation, with a preview of the job.
export default class JobPreviewScreen extends Component {

  static navigationOptions = {
    title: 'Job Preview',
  };

  render() {
    return (
      <Container>
        <Content contentContainerStyle={GlobalStyle.padder}>
          <Card>
            <JobTypeCardPreview
              title="Snöskottning" subtitle="Få hjälp i vinterkylan!"
              cover={{ uri: EXAMPLE_IMAGE_URL }} icon={{ uri: EXAMPLE_IMAGE_URL }}
            />
            <TimeCardPreview
              data={{ duration: 'Litet, 1-2 timmar', cost: '(150 - 300 kr)' }}
            />
            <CalendarCardPreview
              data={{ date: '23 April 2017', time: '16:00' }}
            />
            <PlaceCardPreview
              data={{ address: 'Sample Street 46', city: 'Sample City', zip: '12345' }}
            />
          </Card>
        </Content>
      </Container>
    );
  }
}
