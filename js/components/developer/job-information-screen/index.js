import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Tab, Tabs } from 'native-base';
import JobDetails from './jobDetails';
import ChooseWorkerScreen from '../choose-worker-screen';
import I18n from '../../../i18n';

class JobInformationScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screen_titles.my_jobs'),
  };
  static propTypes = {
    jobJson: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  };

  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading={I18n.t('job.job_details')} >
            <JobDetails
              jobJson={this.props.jobJson}
            />
          </Tab>
          <Tab heading={I18n.t('job.applications')}>
            <ChooseWorkerScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  jobJson: state.ownedJobs.selectedJob,
});

export default connect(mapStateToProps)(JobInformationScreen);
