import React, { Component } from 'react';

import NetworkingLogin from './networkingLogin';
import NetworkingHome from './networkingHome';

export default class LoginExampleScreen extends Component {
  static navigationOptions = {
    title: 'Login Example',
  };

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  updateLogedin() {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <NetworkingLogin
          onLogin={() => this.updateLogedin()}
        />
      );
    }
    return (
      <NetworkingHome
        onLogout={() => this.updateLogedin()}
      />
    );
  }
}
