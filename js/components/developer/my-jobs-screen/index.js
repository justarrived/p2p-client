import React, { Component } from 'react';
import { Tab, Tabs } from 'native-base';
import { connect } from 'react-redux';
import MyJobsTab from './myJobsTab';

import I18n from '../../../i18n';
import { requestGetUserJobs } from '../../../actions/ownedJobs';

class MyJobsScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screen_titles.my_jobs'),
  };

  static propTypes = {
    userId: React.PropTypes.number.isRequired,
    token: React.PropTypes.string.isRequired,
    loading: React.PropTypes.bool.isRequired,
    getOwnedJobs: React.PropTypes.func.isRequired,
    userJobs: React.PropTypes.arrayOf(React.PropTypes.shape).isRequired,
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
    // TODO Replace placeholder data with real data from API.
    const temporaryActive = {
      'section_headings.assigned_jobs': this.props.userJobs,
      'section_headings.unassigned_jobs': this.props.userJobs,
    };

    const temporaryArchived = {
      'section_headings.archived_jobs': this.props.userJobs,
    };
    return (
      <Tabs>
        <Tab heading={I18n.t('job.headings.current')}>
          <MyJobsTab
            loading={this.props.loading}
            onRefresh={() => this.downloadJobs()}
            data={temporaryActive}
            toNextScreen={() => this.navigateToNextScreen()}
          />
        </Tab>
        <Tab heading={I18n.t('job.headings.history')}>
          <MyJobsTab
            loading={this.props.loading}
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
  userJobs: state.ownedJobs.data,
  loading: state.ownedJobs.ownedJobsLoading,
  token: state.session.token,
  userId: state.session.userId,
});

function bindAction(dispatch) {
  return {
    getOwnedJobs: (userId, token) => dispatch(requestGetUserJobs(userId, token)),
  };
}

export default connect(mapStateToProps, bindAction)(MyJobsScreen);
