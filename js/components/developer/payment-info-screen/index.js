import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Text, ListItem, Thumbnail, Body, Left, Form, Content, Button } from 'native-base';
import paymentInfoScreenStyle from './paymentInfoScreenStyle';

const alertMessage1 = 'För Kortet .... .... .... 4499\n';
const alertMessage2 = 'För Kortet .... .... .... 3232\n';


export default class PaymentInfoScreen extends Component {
  static navigationOptions = {
    title: 'Payment Information',
  };

  render() {
    return (
      <Content>
        <Form>
          <ListItem avatar onPress={() => Alert.alert('Bekräfta Betalning', alertMessage1)}>
            <Left>
              <Thumbnail source={require('./master.png')} />
            </Left>
            <Body>
              <Text> .... .... .... 4499</Text>
              <Text note>Master Card</Text>
            </Body>
          </ListItem>
          <ListItem avatar onPress={() => Alert.alert('Bekräfta Betalning', alertMessage2)}>
            <Left>
              <Thumbnail source={require('./visa.png')} />
            </Left>
            <Body>
              <Text> .... .... .... 3232</Text>
              <Text note>Visa Card</Text>
            </Body>
          </ListItem>
        </Form>
        <View style={paymentInfoScreenStyle.addCardButton}>
          <Button block light>
            <Text>Lägg Till Kort</Text>
          </Button>
        </View>
      </Content>
    );
  }
}
