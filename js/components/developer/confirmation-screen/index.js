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
        <Content contentContainerStyle={globalStyle.modalPadder}>
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
          <View View style={styles.textCon}>
            <Text style={StyleSheet.flatten(styles.description)}>
              {'Thank you for using People by Just Arrived'}
            </Text>
            <Text style={StyleSheet.flatten(styles.description)}>
              {'Invite a friend to the app and get 15% of on your next service'}
            </Text>
          </View>
          <View style={styles.nextButtonContainer}>
            <JAButton
              content={'Invite with SMS'}
              typeOfButton={JA_BUTTON.PRIMARY}
            />
          </View>
          <JAButton
            content={'Invite with Facebook'}
            typeOfButton={JA_BUTTON.FACEBOOK}
          />
          <View style={styles.skipButtonContainer}>
            <Button light transparent style={StyleSheet.flatten(styles.alignButtonCenter)} rounded>
              <Text Text style={StyleSheet.flatten(styles.skipInvite)}>{'Skip Invite'}</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
