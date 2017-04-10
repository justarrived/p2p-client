import React, { Component } from 'react';
import { connect } from 'react-redux';

import NetworkingLogin from './networkingLogin';
import NetworkingHome from './networkingHome';

class LoginExampleScreen extends Component {
  static propTypes = {
    token: React.PropTypes.string,
    userId: React.PropTypes.number,
  }
  static navigationOptions = {
    title: 'Login Example',
  };

  render() {
    if (this.props.token === null) {
      return (
        <NetworkingLogin
          onLogin={(token, userId) => this.updateToken(token, userId)}
        />
      );
    }
    return (
      <NetworkingHome />
    );
  }
}

// props tied together with Redux state
const mapStateToProps = state => ({
  token: state.session.token,
  userId: state.session.userId,
});

// Connect class with Redux and export
export default connect(mapStateToProps)(LoginExampleScreen);
