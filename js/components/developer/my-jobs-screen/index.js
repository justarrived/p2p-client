import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs } from 'native-base';
import MyJobsTab from './myJobsTab';

import I18n from '../../../i18n';
import { requestGetUserJobs } from '../../../actions/ownedJobs';

class MyJobsScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screen_titles.my_tasks'),
  };

  static propTypes = {
    userId: React.PropTypes.number.isRequired,
    token: React.PropTypes.string.isRequired,
    getOwnedJobs: React.PropTypes.func.isRequired,
    jobsAssigned: React.PropTypes.arrayOf(React.PropTypes.shape).isRequired,
    jobsUnassigned: React.PropTypes.arrayOf(React.PropTypes.shape).isRequired,
    jobsHistoric: React.PropTypes.arrayOf(React.PropTypes.shape).isRequired,
  };

  // Download owned jobs when compoent mounts
  componentDidMount() {
    this.downloadJobs();
  }

  downloadJobs() {
    this.props.getOwnedJobs(this.props.userId, this.props.token);
  }

  navigateToNextScreen = () => (
    this.props.navigation.navigate('JobInfoScreen')
  );

  render() {
    const temporaryActive = {
      'section_headings.assigned_tasks': this.props.jobsAssigned,
      'section_headings.unassigned_tasks': this.props.jobsUnassigned,
    };

    const temporaryArchived = {
      'section_headings.archived_tasks': this.props.jobsHistoric,
    };
    return (
      <Tabs>
        <Tab heading={I18n.t('job.headings.current')}>
          <MyJobsTab
            onRefresh={() => this.downloadJobs()}
            data={temporaryActive}
            toNextScreen={() => this.navigateToNextScreen()}
          />
        </Tab>
        <Tab heading={I18n.t('job.headings.history')}>
          <MyJobsTab
            onRefresh={() => this.downloadJobs()}
            data={temporaryArchived}
            toNextScreen={() => this.navigateToNextScreen()}
          />
        </Tab>
      </Tabs>
    );
  }
}

const mapStateToProps = state => ({
  jobsAssigned: state.ownedJobs.assigned,
  jobsUnassigned: state.ownedJobs.unassigned,
  jobsHistoric: state.ownedJobs.historic,
  token: state.session.token,
  userId: state.session.userId,
});

function bindAction(dispatch) {
  return {
    getOwnedJobs: (userId, token) => dispatch(requestGetUserJobs(userId, token)),
  };
}

export default connect(mapStateToProps, bindAction)(MyJobsScreen);
