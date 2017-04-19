import React, { Component, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Content, Card, Container, CheckBox, Form, Thumbnail, ListItem, Button, Body, Col, Grid } from 'native-base';
import { connect } from 'react-redux';
import EmailInput from '../../common/email-input';
import PasswordInput from '../../common/password-input';
import { requestSignIn } from '../../../actions/session';
import LoginScreenStyles from './loginScreenStyles';
import I18n from '../../../i18n';

// Temporary constants. These will be moved and implemented in another way in the future!
const REMEMBER_ME_STRING = I18n.t('login.remember_me');
const LOGIN_BUTTON_STRING = I18n.t('login.sign_in_button');
const FORGOT_PASSWORD_STRING = I18n.t('login.forgot_password_button');
const SIGN_UP_BUTTON_STRING = I18n.t('sign_up.sign_up_button');
const LOGO_URL = 'https://facebook.github.io/react/img/logo_og.png';

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
          {/* Logo container */}
          <View style={LoginScreenStyles.logoContainer}>
            <Thumbnail
              style={StyleSheet.flatten(LoginScreenStyles.logo)} source={{ uri: LOGO_URL }}
            />
          </View>

          {/* Login card form */}
          <Card style={StyleSheet.flatten(LoginScreenStyles.cardForm)}>

            {/* Input fields */}
            <Form>
              <EmailInput
                title="Email"
                onChange={email => this.setState({ email })}
                defaultValue={this.state.email}
              />
              <PasswordInput
                title="Password"
                onChange={password => this.setState({ password })}
                defaultValue={this.state.password}
              />
            </Form>

            {/* Remember password checkbox */}
            <ListItem>
              <CheckBox
                checked={this.state.rememberPassword}
                onPress={() => this.toggleCheckbox()}
              />
              <Body>
                <Text>{REMEMBER_ME_STRING}</Text>
              </Body>
            </ListItem>

            {/* Button container */}
            <View style={LoginScreenStyles.buttonContainer}>
              {/* Login button */}
              <Button block primary onPress={() => this.logIn()}>
                <Text>{LOGIN_BUTTON_STRING}</Text>
              </Button>

              {/* Secondary buttons container */}
              <Grid style={StyleSheet.flatten(LoginScreenStyles.secondaryButtonsContainer)}>

                {/* Forgot password button container */}
                <Col style={StyleSheet.flatten(LoginScreenStyles.secondaryButtonSpacing)} >
                  <Button small block bordered >
                    <Text>{FORGOT_PASSWORD_STRING}</Text>
                  </Button>
                </Col>

                {/* Create account button container */}
                <Col>
                  <Button small block bordered onPress={() => this.props.goToRegister()}>
                    <Text>{SIGN_UP_BUTTON_STRING}</Text>
                  </Button>
                </Col>
              </Grid>
            </View>
          </Card>
        </Content>
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
