import React, { Component } from 'react';
import { Text } from 'react-native';
import { Content, Card, CardItem } from 'native-base';

import EmailInput from '../../common/email-input';
import PasswordInput from '../../common/password-input';
import CardItemButton from '../../common/card-item-button/cardItemButton';

import { signUp, signIn } from '../../../networking/auth';

// Setting default values so they do not have to be entered every time
const USER = 'noname@nomail.nope';
const PASSWORD = 'password';

class NetworkingLogin extends Component {
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

  create() {
    signUp(this.state.email, this.state.password,
      () => this.props.onLogin(),
      error => this.setState({ status: error.toString() }));
  }

  logIn() {
    signIn(this.state.email, this.state.password,
      (responseJson) => {
        this.props.onLogin(responseJson.data.attributes['auth-token']);
      },
      error => this.setState({ status: error.toString() }));
  }

  render() {
    // console.log('render NetworkingLogin');
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
            onPress={() => this.logIn()}
            text="log in"
          />
          <CardItemButton
            onPress={() => this.create()}
            text="sign up"
          />
        </Card>
      </Content>
    );
  }
}

module.exports = NetworkingLogin;
