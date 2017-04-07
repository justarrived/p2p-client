import React, { Component } from 'react';
import { Tab, Tabs } from 'native-base';
import { connect } from 'react-redux';
import MyJobsTab from './myJobsTab';

class MyJobsScreen extends Component {
  static navigationOptions = {
    title: 'Mina Uppdrag',
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
      'Tilldelade uppdrag': this.props.ownedJobs.data,
      'Icke tilldelade uppdrag': this.props.ownedJobs.data,
    };

    const temporaryArchived = {
      'Avslutade uppdrag': this.props.ownedJobs.data,
    };

    return (
      <Tabs>
        <Tab heading="Aktiva">
          <MyJobsTab data={temporaryActive} toNextScreen={() => this.navigateToNextScreen()} />
        </Tab>
        <Tab heading="Avslutade">
          <MyJobsTab data={temporaryArchived} toNextScreen={() => this.navigateToNextScreen()} />
        </Tab>
      </Tabs>
    );
  }
}

const mapStateToProps = state => ({ ownedJobs: state.ownedJobs });

export default connect(mapStateToProps)(MyJobsScreen);
