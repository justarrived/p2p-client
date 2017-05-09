import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Content, Thumbnail, Button } from 'native-base';
import styles from './style';
import JAButton from '../../common/ja-button';
import JATagline from '../../common/ja-tagline';
import { JA_BUTTON } from '../../common/constants';
import globalStyle from '../../common/globalStyle';
import I18n from '../../../i18n';

const CHECK_MARK = require('../../../../assets/images/check-mark.png');

export default class ConfirmationScreen extends Component {

  render() {
    return (
      <Container style={StyleSheet.flatten(globalStyle.whiteBackgroundColor)}>
        <Content contentContainerStyle={globalStyle.modalPadder}>
          <JATagline />
          <Thumbnail
            resizeMode="contain"
            style={StyleSheet.flatten(styles.picture)} source={CHECK_MARK}
          />
          <Text style={styles.title}>
            {'The task is completed!'}
          </Text>
          <View style={styles.descriptionContainer}>
            <Text style={[styles.description, styles.marginBottom]}>
              {'Thank you for using People by Just Arrived!'}
            </Text>
            <Text style={styles.description}>
              {'Invite a friend to the app and get 15% of on your next service.'}
            </Text>
          </View>
          <View style={styles.buttonPadder}>
            <JAButton
              content={'Invite with SMS'}
              typeOfButton={JA_BUTTON.PRIMARY}
            />
          </View>
          <JAButton
            content={'Invite with Facebook'}
            typeOfButton={JA_BUTTON.FACEBOOK}
          />
          <Button transparent style={StyleSheet.flatten(styles.skipInviteButton)}>
            <Text style={styles.skipInvite}>{'Skip Invite'}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
