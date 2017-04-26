import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Content, Container, Form } from 'native-base';
import { connect } from 'react-redux';
import EmailInput from '../../common/email-input';
import JAHeader from '../../common/ja-header';
import JAButton from '../../common/ja-button';
import { JA_BUTTON } from '../../common/constants';
import PasswordInput from '../../common/password-input';
import { requestSignIn } from '../../../actions/session';
import LoginScreenStyles from './loginScreenStyles';
import I18n from '../../../i18n';

// Temporary constants. These will be moved and implemented in another way in the future!
const LOGIN_BUTTON_STRING = I18n.t('login.sign_in_button');
const FACEBOOK_BUTTON_STRING = I18n.t('social.facebook');
const FORGOT_PASSWORD_STRING = I18n.t('login.forgot_password_button');
const NEED_ACCOUNT_STRING = I18n.t('sign_up.need_account');
const OR = I18n.t('common.or');

// Setting default values so they do not have to be entered every time
// TODO Store email input value in Redux
const USER = 'noname@nomail.nope';
const PASSWORD = 'password';

class LoginScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screen_titles.login'),
  };

  static propTypes = {
    goToRegister: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
    sessionError: PropTypes.objectOf(PropTypes.any),
    userError: PropTypes.objectOf(PropTypes.any),
  };

  static defaultProps = {
    sessionError: null,
    userError: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: USER,
      password: PASSWORD,
      /*
        Used to set minHeight of Content (which is a scroll view).
        This mimics the behaviour of flex: 1 in a scroll view,
        but in addition preserves the the ability to scroll if needed.
      */
      minContentHeight: 0,  // This is instantly updated upon mount/render.
      rememberPassword: true,
    };
  }

  logIn() {
    this.props.signIn(this.state.email, this.state.password);
  }

  toggleCheckbox = () => this.setState({ rememberPassword: !this.state.rememberPassword })

  // TODO Implement proper error handling
  render() {
    if (this.props.sessionError != null) {
      // console.warn(JSON.stringify(this.props.sessionError));
    }
    if (this.props.userError != null) {
      // console.warn(JSON.stringify(this.props.userError));
    }

    const fullHeightContentStyle = StyleSheet.create({
      fullHeight: {
        minHeight: this.state.minContentHeight, // The height of the Content component.
      },
    });

    return (
      <Container>
        {/* Full height scroll view */}
        <Content
          onLayout={(event) => { // Invoked on mount and device orientation change.
            const { height } = event.nativeEvent.layout;  // The height of the Content component.
            this.setState({ minContentHeight: height });
          }} contentContainerStyle={[fullHeightContentStyle.fullHeight, LoginScreenStyles.padder]}
        >

          {/* Header */}
          <JAHeader />

          {/* Input fields */}
          <Form style={StyleSheet.flatten(LoginScreenStyles.inputFields)}>
            <EmailInput
              onChange={email => this.setState({ email })}
              defaultValue={this.state.email}
              style={StyleSheet.flatten(LoginScreenStyles.inputField)}
            />
            <PasswordInput
              onChange={password => this.setState({ password })}
              defaultValue={this.state.password}
              style={StyleSheet.flatten(LoginScreenStyles.inputField)}
            />
          </Form>

          {/* Forgot password clickable text */}
          {/* TODO: Create forgot password view and link there */}
          <TouchableOpacity onPress={() => this.props.goToRegister()}>
            <Text style={StyleSheet.flatten(LoginScreenStyles.forgotPassword)}>
              {FORGOT_PASSWORD_STRING}
            </Text>
          </TouchableOpacity>

          {/* Button container */}
          <View style={LoginScreenStyles.buttonContainer}>
            {/* Login button */}
            <JAButton
              content={LOGIN_BUTTON_STRING}
              actionOnClick={() => this.logIn()}
              typeOfButton={JA_BUTTON.PRIMARY}
            />
            <Text style={StyleSheet.flatten(LoginScreenStyles.textBetweenButtons)}>
              {OR}
            </Text>
            {/* TODO: Either remove button or add facebook login support :) */}
            <JAButton
              content={FACEBOOK_BUTTON_STRING}
              actionOnClick={() => this.logIn()}
              typeOfButton={JA_BUTTON.FACEBOOK}
            />
          </View>
        </Content>

        {/* Footer */}
        <TouchableOpacity onPress={() => this.props.goToRegister()}>
          <View style={LoginScreenStyles.footerStyling}>
            <Text style={StyleSheet.flatten(LoginScreenStyles.footerText)}>
              {NEED_ACCOUNT_STRING}
            </Text>
          </View>
        </TouchableOpacity>
      </Container>
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
  };
}

// Connect class with Redux and export
export default connect(mapStateToProps, bindAction)(LoginScreen);
