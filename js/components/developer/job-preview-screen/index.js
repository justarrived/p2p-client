import React, { Component } from 'react';
import { connect } from 'react-redux';
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
class JobPreviewScreen extends Component {

  static navigationOptions = {
    title: I18n.t('screen_titles.job_preview'),
  };

  static propTypes = {
    jobPreview: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
    // userId: React.PropTypes.number.isRequired,
  };

  // TODO revamp how job duration is handled

  render() {
    const addressData = this.props.jobPreview.helperAddress;
    const dateData = this.props.jobPreview.helperDate;
    return (
      <Container>
        <Content contentContainerStyle={GlobalStyle.padder}>
          <Card>
            <JobTypeCardPreview
              title={this.props.jobPreview.name}
              subtitle={this.props.jobPreview.description}
              cover={{ uri: EXAMPLE_IMAGE_URL }}
              icon={{ uri: EXAMPLE_IMAGE_URL }}
            />
            <TimeCardPreview
              data={{
                duration: I18n.t('size.small.estimated_duration'),
                cost: I18n.t('size.small.cost') }}
            />
            <CalendarCardPreview
              data={{
                date: dateData.date,
                time: dateData.time,
              }}
            />
            <PlaceCardPreview
              data={{
                address: addressData.street,
                zip: addressData.zip,
                city: this.props.jobPreview.city,
              }}
            />
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  // userId: state.session.userId,
  jobPreview: state.jobCreation,
});

export default connect(mapStateToProps)(JobPreviewScreen);
