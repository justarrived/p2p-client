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
      token: null,
    };
  }

  updateToken(token) {
    // console.warn(`Token: ${token}`);
    this.setState({
      token,
    });
  }

  render() {
    if (this.state.token === null) {
      return (
        <NetworkingLogin
          onLogin={token => this.updateToken(token)}
        />
      );
    }
    return (
      <NetworkingHome
        token={this.state.token}
        onLogout={() => this.updateToken(null)}
      />
    );
  }
}
