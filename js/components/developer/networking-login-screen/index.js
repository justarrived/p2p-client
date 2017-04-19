import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'native-base';

import NetworkingLogin from './networkingLogin';
import NetworkingHome from './networkingHome';

class LoginExampleScreen extends Component {
  static propTypes = {
    authenticated: React.PropTypes.bool.isRequired,
    loading: React.PropTypes.bool.isRequired,
  }
  static navigationOptions = {
    title: 'Login Example',
  };

  render() {
    if (this.props.authenticated) {
      return (
        <NetworkingHome />
      );
    }
    if (this.props.loading) {
      return (
        <Spinner color="blue" />
      );
    }
    return (
      <NetworkingLogin />
    );
  }
}

// props tied together with Redux state
const mapStateToProps = state => ({
  authenticated: state.session.token != null,
  loading: state.session.sessionLoading || state.user.userLoading,
});

// Connect class with Redux and export
export default connect(mapStateToProps)(LoginExampleScreen);
