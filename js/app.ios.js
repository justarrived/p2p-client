import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import AppNavigator from './appNavigator';

/*
  Main navigation with navigation helpers for Redux.
  Makes it possible to access navigation state from Redux.

  iOS specific (ends with .ios.js), as it does NOT have to listen to a hardware back button.
  (See app.android.ios for hardware back button listener).
*/
class AppNavigatorWithHelpers extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    navigationState: React.PropTypes.shape({
      index: React.PropTypes.number.isRequired,
      routes: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    }).isRequired,
  }

  render() {
    const { dispatch, navigationState } = this.props;
    return (
      <AppNavigator
        navigation={
          addNavigationHelpers({
            dispatch,
            state: navigationState,
          })
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  navigationState: state.navigation,
});

export default connect(mapStateToProps)(AppNavigatorWithHelpers);
