import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Card, Spinner } from 'native-base';

import JobTypeCardPreview from './jobTypeCardPreview';
import TimeCardPreview from './timeCardPreview';
import PlaceCardPreview from './placeCardPreview';
import CalendarCardPreview from './calendarCardPreview';
import CardItemButton from '../../common/card-item-button/cardItemButton';
import GlobalStyle from '../../common/globalStyle';
import I18n from '../../../i18n';

import { createJsonDataAttributes } from '../../../networking/json';
import { requestPostJob } from '../../../actions/jobs';

// Temporary constants. These will be moved and implemented in another way in the future!
const EXAMPLE_IMAGE_URL = 'https://facebook.github.io/react/img/logo_og.png';

// Screen shown during job creation, with a preview of the job.
class JobPreviewScreen extends Component {

  static navigationOptions = {
    title: I18n.t('screen_titles.job_preview'),
  };

  static propTypes = {
    jobPreview: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
    token: React.PropTypes.string.isRequired,
    createJob: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool.isRequired,
    jobError: React.PropTypes.objectOf(React.PropTypes.any),
  };
  static defaultProps = {
    jobError: null,
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.loading && !nextProps.loading && nextProps.jobError === null) {
      // Successfully created a job. Navigate!
      // TODO reset 'create job' navigation stack
      this.props.navigation.navigate('MyJobsScreen');
    }
  }

  postJob() {
    const data = this.props.jobPreview;
    const jobJson = createJsonDataAttributes({
      hours: data.hours,
      name: data.name,
      description: data.description,
      owner_user_id: data.owner_user_id,
      job_date: data.job_date,
      job_end_date: data.job_end_date,
      language_id: data.language_id,
      category_id: data.category_id,
      hourly_pay_id: data.hourly_pay_id,
      skills: data.skill_ids,
      city: data.city,
      street: data.street,
      zip: data.zip,
    });
    this.props.createJob(jobJson, this.props.token);
  }

  // TODO revamp how job duration is handled...

  render() {
    if (this.props.loading) {
      return <Spinner color="blue" />;
    }
    if (this.props.jobError != null) {
      // TODO Implement proper error handling
      // console.warn(JSON.stringify(this.props.jobError));
    }
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
                address: this.props.jobPreview.street,
                zip: this.props.jobPreview.zip,
                city: this.props.jobPreview.city,
              }}
            />
            <CardItemButton
              text={'create job'}
              onPress={() => this.postJob()}
            />
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  token: state.session.token,
  jobPreview: state.jobCreation,
  loading: state.jobs.jobLoading,
  jobError: state.jobs.error,
});

function bindAction(dispatch) {
  return {
    createJob: (jobJson, token) => dispatch(requestPostJob(jobJson, token)),
  };
}

export default connect(mapStateToProps, bindAction)(JobPreviewScreen);
