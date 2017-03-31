import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content, CheckBox, Form, Item, Thumbnail, Card, Input, ListItem, Button, Body, Col, Grid, Text } from 'native-base';
import LoginScreenStyles from './loginScreenStyles';

// Temporary constants. These will be moved and implemented in another way in the future!
const EMAIL_STRING = 'E-post';
const PASSWORD_STRING = 'Lösenord';
const REMEMBER_ME_STRING = 'Kom ihåg mig';
const LOGIN_BUTTON_STRING = 'Logga In';
const FORGOT_PASSWORD_STRING = 'Glömt lösenord';
const SIGN_UP_BUTTON_STRING = 'Skapa konto';
const LOGO_URL = 'https://facebook.github.io/react/img/logo_og.png';

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor() {
    super();
    /*
      Used to set minHeight of Content (which is a scroll view).
      This mimics the behaviour of flex: 1 in a scroll view,
      but in addition preserves the the ability to scroll if needed.
    */
    this.state = {
      minContentHeight: 0,  // This is instantly updated upon mount/render.
      rememberPassword: true,
    };
  }

  // if no nextscreen is passied into the navigation, MyProfileScreen is used as default for nextScreen
  // else navigate to the provided nextScreen is executed
  pressLoginButton() {
    const { navigate } = this.props.navigation;
    if (this.props.navigation.state.params == null) {
      navigate('MyProfileScreen');
    } else {
      navigate(this.props.navigation.state.params.nextScreen);
    }
  }

  // if no params are passed into the navigation, we will go to CreateAccountScreen with MyProfileScreen as nextScreen.
  pressCreateAccountButton() {
    const { navigate } = this.props.navigation;
    if (this.props.navigation.state.params == null) {
      navigate('CreateAccountScreen', { nextScreen: 'MyProfileScreen' });
    } else {
      navigate('CreateAccountScreen', { nextScreen: 'JobPreviewScreen' });
    }
  }

  toggleCheckbox = () => this.setState({ rememberPassword: !this.state.rememberPassword })


  render() {
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
              <Item underline>
                <Input placeholder={EMAIL_STRING} />
              </Item>
              <Item underline>
                <Input secureTextEntry placeholder={PASSWORD_STRING} />
              </Item>
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
              <Button block primary onPress={() => this.pressLoginButton()}>
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
                  <Button small block bordered onPress={() => this.pressCreateAccountButton()}>
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
