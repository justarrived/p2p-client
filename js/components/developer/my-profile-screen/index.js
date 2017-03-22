import React, { Component } from 'react';


import { Container, Tab, Tabs, Text } from 'native-base';
import MakePaymentScreen from '../make-payment-screen';

export default class MyProfileScreen extends Component {
  static navigationOptions = {
    title: 'My Profile',
  };

  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="PERSONUPPGIFTER" >
            <Text> hej </Text>
          </Tab>
          <Tab heading="BETALUPPGIFTER">
            <MakePaymentScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
