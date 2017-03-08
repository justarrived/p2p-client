import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
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

    /*
      Used to set minHeight of Content (which is a scroll view).
      This mimics the behaviour of flex: 1 in a scroll view,
      but in addition preserves the the ability to scroll if needed.
    */
    this.state = {
      minContentHeight: 0,  //This is instantly updated upon mount/render.
    };
  }

  render() {
    return (
      <Container>
        <Content
          onLayout={(event) => { // Invoked on mount and device orientation change.
            const { height } = event.nativeEvent.layout;  // The height of the Content component.
            this.setState({ minContentHeight: height });
          }} contentContainerStyle={{ minHeight: this.state.minContentHeight }}
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
