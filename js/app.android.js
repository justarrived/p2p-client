import React, { Component } from 'react';
import { NavigationActions, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { BackAndroid } from 'react-native';
import AppNavigator from './appNavigator';
import Secure from './components/developer/secure/secure';

/*
  Main navigation with navigation helpers for Redux.
  Makes it possible to access navigation state from Redux.

  Android specific (ends with .android.js) to listen to the Android hardware back button.
*/
class AppNavigatorWithHelpers extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    navigationState: React.PropTypes.shape({
      index: React.PropTypes.number.isRequired,
      routes: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    }).isRequired,
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackButton', () => {
      if (this.shouldCloseOnBack()) {
        return false; // Close application
      }
      this.props.dispatch(NavigationActions.back());
      return true;  // Don't close application
    });
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackButton');
  }

  /*
    Determines if the application should be closed upon hardware back button press.
    Follows the standard behaviour from react-navigation without Redux integration.
    Closes the app if the first tab, and the first screen in that tab stack, are selected.
  */
  shouldCloseOnBack = () => {
    const { index, routes } = this.props.navigationState;
    const tabStack = routes[index];
    const stackIndex = tabStack.index;
    return index === 0 && stackIndex === 0;
  }

  render() {
    const { dispatch, navigationState } = this.props;
    return (
      <Secure>
        <AppNavigator
          navigation={
          addNavigationHelpers({
            dispatch,
            state: navigationState,
          })
        }
        />
      </Secure>
    );
  }
}

const mapStateToProps = state => ({
  navigationState: state.navigation,
});

export default connect(mapStateToProps)(AppNavigatorWithHelpers);
