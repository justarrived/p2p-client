import React, { Component } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import {
  Container,
  Content,
  CheckBox,
  Form,
  Item,
  Label,
  Thumbnail,
  Input,
  ListItem,
  Button,
  Body,
  Text,
} from 'native-base';
import LoginScreenStyles from './loginScreenStyles';

// Temporary constants. These will be moved and implemented in another way in the future!
const HEADER_AND_FOOTER_HEIGHT_SUM = 130; // The sum of the heights of the header and the footer.
const EMAIL_STRING = 'E-post';
const PASSWORD_STRING = 'Lösenord';
const REMEMBER_ME_STRING = 'Kom ihåg mig';
const LOGIN_BUTTON_STRING = 'Logga In';
const OR_CREATE_ACCOUNT_STRING = 'ELLER SKAPA ETT KONTO...';
const JUST_ARRIVED_LOGO_URL = 'https://justarrived.se/assets/images/press/just-arrived-logo.png';

export default class LoginScreen extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'Developer',
    },
    title: 'Login',
  };

  constructor() {
    super();

    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    };

    this.onLayout = this.onLayout.bind(this);
  }

  /*
    This function is run upon rotating the device.
    It updates the state with the current device dimensions.
    We later use this to set the minHeight of the scroll view in the login screen.
  */
  onLayout() {
    this.setState({ width: Dimensions.get('window').width, height: Dimensions.get('window').height });
  }

  render() {
    return (
      <Container>
        {/*
          About contentContainerStyle and setting minHeight:
          Content is a scroll view.
          Using minHeight and the device height,
          we can mimic the behaviour of a flex-box in a scroll view.
          This allows us to have a footer in a scroll view, and dynamically sized content.
          If the content does not fit, we still have the ability to scroll.
        */}
        <Content
          onLayout={this.onLayout} contentContainerStyle={{
            minHeight: this.state.height - HEADER_AND_FOOTER_HEIGHT_SUM,
          }}
        >
          <View style={LoginScreenStyles.container}>
            <Thumbnail
              style={StyleSheet.flatten(LoginScreenStyles.logo)} square resizeMode="contain" source={{
                uri: JUST_ARRIVED_LOGO_URL,
              }}
            />
            <View style={LoginScreenStyles.bottomForm}>
              <Form>
                <Item floatingLabel>
                  <Label>{EMAIL_STRING}</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>{PASSWORD_STRING}</Label>
                  <Input secureTextEntry />
                </Item>
              </Form>
              <ListItem last>
                <CheckBox checked />
                <Body>
                  <Text>{REMEMBER_ME_STRING}</Text>
                </Body>
              </ListItem>
              <Button block style={StyleSheet.flatten(LoginScreenStyles.loginButton)}>
                <Text>{LOGIN_BUTTON_STRING}</Text>
              </Button>
              <Text note style={StyleSheet.flatten(LoginScreenStyles.createAccountNote)}>
                {OR_CREATE_ACCOUNT_STRING}
              </Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
