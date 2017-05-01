import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Content, Thumbnail, Button, Text as NBText } from 'native-base';
import styles from './style';
import JAButton from '../../common/ja-button';
import JATagline from '../../common/ja-tagline';
import { JA_BUTTON } from '../../common/constants';
import globalStyle from '../../common/globalStyle';
import I18n from '../../../i18n';

const PICTURE = require('../../../../assets/images/confirmation.png');

export default class ConfirmationScreen extends Component {

  render() {
    return (
      <Container style={StyleSheet.flatten(globalStyle.whiteBackgroundColor)}>
        <Content contentContainerStyle={styles.padder}>
          <JATagline />
          <View style={styles.pictureContainer}>
            <Thumbnail
              resizeMode="contain"
              style={StyleSheet.flatten(styles.picture)} source={PICTURE}
            />
          </View>
          <View>
            <Text style={StyleSheet.flatten(styles.title)}>
              {'The task is completed!'}
            </Text>
          </View>
          <View>
            <Text style={StyleSheet.flatten(styles.description)}>
              {'Thank you for using People by just arrived'}
            </Text>
          </View>
          <View>
            <Text style={StyleSheet.flatten(styles.description)}>
              {'Invite a friend and get bonus'}
            </Text>
          </View>
          <View style={styles.nextButtonContainer}>
            <Button style={StyleSheet.flatten(styles.alignButtonCenter)} rounded primary>
              <NBText>{'Invite by sms'}</NBText>
            </Button>
          </View>
          <JAButton
            content={'Invite with Facebook'}
            actionOnClick={() => this.logIn()}
            typeOfButton={JA_BUTTON.FACEBOOK}
          />
          <View style={styles.skipButtonContainer}>
            <Button light transparent style={StyleSheet.flatten(styles.alignButtonCenter)} rounded>
              <Text>{'Skip Invite'}</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
