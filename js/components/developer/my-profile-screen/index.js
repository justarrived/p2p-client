import React, { Component } from 'react';
import { Container, Tab, Tabs } from 'native-base';
import PaymentInfoScreen from '../payment-info-screen';
import ProfileInfo from './profileInfo';
import I18n from '../../../i18n';

export default class MyProfileScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screen_titles.my_profile'),
  };

  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading={I18n.t('account.profile_tab')}>
            <ProfileInfo />
          </Tab>
          <Tab heading={I18n.t('account.payment_details_tab')}>
            <PaymentInfoScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
