import React, { Component } from 'react';
import { Text } from 'react-native';
import { Content, Card, CardItem } from 'native-base';

import EmailInput from '../../common/email-input';
import PasswordInput from '../../common/password-input';
import CardItemButton from '../../common/card-item-button/cardItemButton';

import Auth from './networking/auth';

// Setting default values so they do not have to be entered every time
const USER = 'noname@nomail.nope';
const PASSWORD = 'password';

class FirebaseLogin extends Component {
  static propTypes = {
    onLogin: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      email: USER,
      password: PASSWORD,
      status: 'sign in or create account',
    };
  }

  signUp() {
    Auth.signUp(this.state.email, this.state.password,
      () => this.props.onLogin(),
      error => this.setState({ status: error.toString() }));
  }

  signIn() {
    Auth.signIn(this.state.email, this.state.password,
      () => this.props.onLogin(),
      error => this.setState({ status: error.toString() }));
  }

  render() {
    // console.log('render FirebaseLogin');
    return (
      <Content>
        <Card>
          <CardItem>
            <Text>{this.state.status}</Text>
          </CardItem>
          <CardItem>
            <EmailInput
              title="Email"
              onChange={email => this.setState({ email })}
              defaultValue={USER}
            />
          </CardItem>
          <CardItem>
            <PasswordInput
              title="Password"
              onChange={password => this.setState({ password })}
              defaultValue={PASSWORD}
            />
          </CardItem>
          <CardItemButton
            onPress={() => this.signIn()}
            text="log in"
          />
          <CardItemButton
            onPress={() => this.signUp()}
            text="sign up"
          />
        </Card>
      </Content>
    );
  }
}

module.exports = FirebaseLogin;
