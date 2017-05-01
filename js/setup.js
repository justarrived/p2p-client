import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import AppNavigatorWithHelpers from './app';
import ChooseJobTypeScreen from './components/developer/choose-job-type-screen';
import configureStore from './store/configureStore';

function setup() : React.Component {
  class Root extends Component {

    constructor() {
      super();
      this.state = {
        isLoading: false,
        store: configureStore(() => this.setState({ isLoading: false })),
      };
    }

    render() {
      return (
        <Provider store={this.state.store}>
          <ChooseJobTypeScreen />
        </Provider>
      );
    }
  }

  return Root;
}

export default setup;
