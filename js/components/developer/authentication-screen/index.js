import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginScreen from '../login-screen';
import CreateAccountScreen from '../create-account-screen';
import { navigate, login, goToRegister } from '../../../actions/navigation';

/**
  Authentication screen containing LoginScreen and CreateAccountScreen,
  and the ability to navigate between them without using a stack.
**/
class AuthenticationScreen extends Component {

  constructor() {
    super();
    this.state = {
      displayLogin: true,
    };
  }

  // Toggles between the login screen and the create account screen.
  toggleScreen() {
    this.setState({ displayLogin: !this.state.displayLogin });
  }

  render() {
    if (this.state.displayLogin) {
      return <LoginScreen goToRegister={() => this.toggleScreen()} />;
    }
    return <CreateAccountScreen goToLogin={() => this.toggleScreen()} />;
  }
}

function bindAction(dispatch) {
  return {
    navigate: (routeName, params) => dispatch(navigate(routeName, params)),
    login: next => dispatch(login(next)),
    goToRegister: next => dispatch(goToRegister(next)),
  };
}

const mapStateToProps = state => ({ navigation: state.navigation });

export default connect(mapStateToProps, bindAction)(AuthenticationScreen);
