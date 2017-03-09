import React, { Component } from 'react';

import { Text } from 'react-native';

import { Container, Content, Tab, Tabs, Header } from 'native-base';
import MakePaymentScreen from '../make-payment-screen';
import PersonalInfoScreen from '../personal-info-screen';

export default class MyProfileScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Header hasTabs />
          <Tabs>
            <Tab heading="PERSONUPPGIFTER" >
              <PersonalInfoScreen />
            </Tab>
            <Tab heading="BETALUPPGIFTER">
              <MakePaymentScreen />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}
/*

*/
