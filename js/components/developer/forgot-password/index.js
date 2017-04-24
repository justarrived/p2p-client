import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  Container, Content, Input,
  Item, Button, Label, Text as NBText } from 'native-base';
import styles from './style';
import I18n from '../../../i18n';
import globalStyle from '../../common/globalStyle';


export default class ForgotPassword extends Component {

  render() {
    return (
      <Container style={StyleSheet.flatten(globalStyle.whiteBackgroundColor)}>
        <Content contentContainerStyle={styles.padder}>
          <View>
            <Text style={StyleSheet.flatten(styles.title)}>
              {I18n.t('login.forgot_your_password')}
            </Text>
          </View>
          <View>
            <Text style={StyleSheet.flatten(styles.description)}>
              {I18n.t('login.forgot_your_password_info')}
            </Text>
          </View>
          <Item floatingLabel>
            <Label>{I18n.t('account.email')}</Label>
            <Input />
          </Item>
          <View style={styles.buttonContainer}>
            <Button
              style={StyleSheet.flatten(styles.button)}
              rounded primary
            >
              <NBText>{I18n.t('button_actions.send')}</NBText>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
