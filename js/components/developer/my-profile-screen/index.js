import React, { Component } from 'react';
import { Container, Tab, Tabs } from 'native-base';
import PaymentInfoScreen from '../payment-info-screen';
import PersonalInfoScreen from '../personal-info-screen';

export default class MyProfileScreen extends Component {
  static navigationOptions = {
    title: 'My Profile',
  };

  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="PERSONUPPGIFTER" >
            <PersonalInfoScreen />
          </Tab>
          <Tab heading="BETALUPPGIFTER">
            <PaymentInfoScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
