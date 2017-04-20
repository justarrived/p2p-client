import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  Container, Content, Grid, Input,
  Item, Button, Label, Text as NBText } from 'native-base';
import styles from './style';
import I18n from '../../../i18n';

const WHITE = 'white';

export default class ForgotPassword extends Component {

  pressLoginButton = () => {
    const { navigate, state } = this.props.navigation;
    if (state.params !== undefined && state.params.nextScreen !== undefined) {
      navigate(state.params.nextScreen);
    } else {
      navigate('LoginScreen');
    }
  }

  render() {
    return (
      <Container style={{ backgroundColor: WHITE }}>
        <Content contentContainerStyle={styles.padder}>
          <View>
            <Text style={StyleSheet.flatten(styles.text1)}>
              {I18n.t('login.forgot_your_password')}
            </Text>
          </View>
          <View>
            <Text style={StyleSheet.flatten(styles.text2)}>
              {I18n.t('login.forgot_your_password_info')}
            </Text>
          </View>
          <Item floatingLabel>
            <Label>{I18n.t('account.email')}</Label>
            <Input />
          </Item>
          <Grid />
          <View style={styles.buttonContainer}>
            <Button
              style={StyleSheet.flatten(styles.button)}
              rounded primary onPress={() => this.pressLoginButton()}
            >
              <NBText>{I18n.t('button_actions.send')}</NBText>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
