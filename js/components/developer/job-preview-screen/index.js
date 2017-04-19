import React, { Component } from 'react';
import { Container, Content, Card } from 'native-base';

import JobTypeCardPreview from './jobTypeCardPreview';
import TimeCardPreview from './timeCardPreview';
import PlaceCardPreview from './placeCardPreview';
import CalendarCardPreview from './calendarCardPreview';
import GlobalStyle from '../../common/globalStyle';
import I18n from '../../../i18n';

// Temporary constants. These will be moved and implemented in another way in the future!
const EXAMPLE_IMAGE_URL = 'https://facebook.github.io/react/img/logo_og.png';

// Screen shown during job creation, with a preview of the job.
export default class JobPreviewScreen extends Component {

  static navigationOptions = {
    title: I18n.t('screen_titles.job_preview'),
  };

  render() {
    return (
      <Container>
        <Content contentContainerStyle={GlobalStyle.padder}>
          <Card>
            <JobTypeCardPreview
              title={I18n.t('categories.shoveling.title')} subtitle={I18n.t('categories.shoveling.description')}
              cover={{ uri: EXAMPLE_IMAGE_URL }} icon={{ uri: EXAMPLE_IMAGE_URL }}
            />
            <TimeCardPreview
              data={{ duration: I18n.t('size.small.estimated_duration'),
                cost: I18n.t('size.small.cost') }}
            />
            <CalendarCardPreview
              data={{ date: '23 April 2017', time: '16:00' }}
            />
            <PlaceCardPreview
              data={{ address: 'Sample Street 46', zip: '12345', city: 'Sample City' }}
            />
          </Card>
        </Content>
      </Container>
    );
  }
}
