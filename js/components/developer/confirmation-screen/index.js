import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Content, Thumbnail, Button } from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './style';
import JAButton from '../../common/ja-button';
import JATagline from '../../common/ja-tagline';
import { JA_BUTTON } from '../../../resources/constants';
import globalStyle from '../../../resources/globalStyle';
import I18n from '../../../i18n';


const resetAction = NavigationActions.reset({
  index: 0,
  key: null,
  actions: [
    NavigationActions.navigate({ routeName: 'MyJobsScreen' }),
  ],
});

const CHECK_MARK = require('../../../../assets/images/check-mark.png');

export default class ConfirmationScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  navigateToMyJobs = () => {
    this.props.navigation.dispatch(resetAction);
  }

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
              actionOnClick={() => this.navigateToMyJobs()}
              content={I18n.t('confirmation.invite_with_sms')}
              typeOfButton={JA_BUTTON.PRIMARY}
            />
          </View>
          <JAButton
            actionOnClick={() => this.navigateToMyJobs()}
            content={I18n.t('confirmation.invite_with_facebook')}
            typeOfButton={JA_BUTTON.FACEBOOK}
          />
          <Button
            onPress={() => this.navigateToMyJobs()}
            transparent style={StyleSheet.flatten(styles.skipInviteButton)}
          >
            <Text style={styles.skipInvite}>{I18n.t('confirmation.skip_invite')}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
