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
            {I18n.t('confirmation.the_task_is_completed')}
          </Text>
          <View style={styles.descriptionContainer}>
            <Text style={[styles.description, styles.marginBottom]}>
              {I18n.t('confirmation.thank_you_for_using_people')}
            </Text>
            <Text style={styles.description}>
              {I18n.t('confirmation.invite_a_friend')}
            </Text>
          </View>
          <View style={styles.buttonPadder}>
            <JAButton
              actionOnClick={() => undefined}
              content={I18n.t('confirmation.invite_with_sms')}
              typeOfButton={JA_BUTTON.PRIMARY}
            />
          </View>
          <JAButton
            actionOnClick={() => undefined}
            content={I18n.t('confirmation.invite_with_facebook')}
            typeOfButton={JA_BUTTON.FACEBOOK}
          />
          <Button
            actionOnClick={() => undefined}
            transparent style={StyleSheet.flatten(styles.skipInviteButton)}
          >
            <Text style={styles.skipInvite}>{I18n.t('confirmation.skip_invite')}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
