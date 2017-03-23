import React, { Component } from 'react';
import { Text } from 'react-native';
import { Content, Card, CardItem } from 'native-base';
import * as firebase from 'firebase';

import EmailInput from '../../common/email-input';
import PasswordInput from '../../common/password-input';
import CardItemButton from '../common/cardItemButton';

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

  async signup() {
    await firebase.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.onLogin())
      .catch(error =>
        this.setState({
          status: error.toString(),
        }));
  }

  async login() {
    await firebase.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.onLogin())
      .catch(error =>
        this.setState({
          status: error.toString(),
        }));
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
            onPress={() => this.login()}
            text="log in"
          />
          <CardItemButton
            onPress={() => this.signup()}
            text="sign up"
          />
        </Card>
      </Content>
    );
  }
}

module.exports = FirebaseLogin;
