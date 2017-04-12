import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import { Content, Card, CardItem } from 'native-base';
import { connect } from 'react-redux';

import EmailInput from '../../common/email-input';
import PasswordInput from '../../common/password-input';
import CardItemButton from '../../common/card-item-button/cardItemButton';

import { createJsonDataAttributes } from '../../../networking/json';
import { requestSignIn } from '../../../actions/session';
import { requestCreateUser } from '../../../actions/user';

function getCreateUserJson(email, password) {
  return createJsonDataAttributes({
    email,
    password,
    consent: true,
    system_language_id: 38,
    first_name: 'SomeName',
    last_name: 'SomeLastName',
  });
}

// Setting default values so they do not have to be entered every time
const USER = 'noname@nomail.nope';
const PASSWORD = 'password';

class NetworkingLogin extends Component {
  static propTypes = {
    signIn: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    sessionError: PropTypes.object,
    userError: PropTypes.object,
  }
  static defaultProps = {
    sessionError: null,
    userError: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      email: USER,
      password: PASSWORD,
      status: 'sign in or create account',
    };
  }

  createAccount() {
    this.props.signUp(
      getCreateUserJson(this.state.email, this.state.password));
  }

  logIn() {
    this.props.signIn(this.state.email, this.state.password);
  }

  render() {
    if (this.props.sessionError != null) {
      // console.warn(JSON.stringify(this.props.sessionError));
    }
    if (this.props.userError != null) {
      // console.warn(JSON.stringify(this.props.userError));
    }

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
            onPress={() => this.createAccount()}
            text="sign up"
          />
        </Card>
      </Content>
    );
  }
}

// props tied together with Redux state
const mapStateToProps = state => ({
  sessionError: state.session.error,
  userError: state.user.error,
});

// props tied together with Redux methods
function bindAction(dispatch) {
  return {
    signIn: (user, password) => dispatch(requestSignIn(user, password)),
    signUp: (user, password) => dispatch(requestCreateUser(user, password)),
  };
}

// Connect class with Redux and export
export default connect(mapStateToProps, bindAction)(NetworkingLogin);
