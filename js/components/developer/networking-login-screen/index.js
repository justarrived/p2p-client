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
      userId: null,
    };
  }

  updateToken(token, userId) {
    // console.warn(`Token: ${token}`);
    this.setState({
      token,
      userId,
    });
  }

  render() {
    if (this.state.token === null) {
      return (
        <NetworkingLogin
          onLogin={(token, userId) => this.updateToken(token, userId)}
        />
      );
    }
    return (
      <NetworkingHome
        token={this.state.token}
        userId={this.state.userId}
        onLogout={() => this.updateToken(null)}
      />
    );
  }
}
