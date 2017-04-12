import React, { Component } from 'react';
import { Tab, Tabs } from 'native-base';
import { connect } from 'react-redux';
import MyJobsTab from './myJobsTab';
import I18n from '../../../i18n';

class MyJobsScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screen_titles.my_jobs'),
  };

  // TODO Improve typechecking
  static propTypes = {
    ownedJobs: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  };

  navigateToNextScreen = () => (
    this.props.navigation.navigate('JobInfoScreen')
  );

  render() {
    // TODO Replace placeholder data with real data from API.
    const temporaryActive = {
      'section_headings.assigned_jobs': this.props.ownedJobs.data,
      'section_headings.unassigned_jobs': this.props.ownedJobs.data,
    };

    const temporaryArchived = {
      'section_headings.archived_jobs': this.props.ownedJobs.data,
    };

    return (
      <Tabs>
        <Tab heading={I18n.t('job.headings.current')}>
          <MyJobsTab data={temporaryActive} toNextScreen={() => this.navigateToNextScreen()} />
        </Tab>
        <Tab heading={I18n.t('job.headings.history')}>
          <MyJobsTab data={temporaryArchived} toNextScreen={() => this.navigateToNextScreen()} />
        </Tab>
      </Tabs>
    );
  }
}

const mapStateToProps = state => ({ ownedJobs: state.ownedJobs });

export default connect(mapStateToProps)(MyJobsScreen);
