import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Content, Button, List } from 'native-base';
import paymentInfoScreenStyle from './paymentInfoScreenStyle';
import AvatarListItem from '../../common/avatar-list-item/avatarListItem';

const masterCardIcon = require('./master.png');
const visaCardIcon = require('./visa.png');

// Temporary data
const CARDS = [
  { cardNumber: '.... .... .... 4499', brand: 'MasterCard', icon: masterCardIcon },
  { cardNumber: '.... .... .... 3232', brand: 'Visa', icon: visaCardIcon },
];

export default class PaymentInfoScreen extends Component {
  static navigationOptions = {
    title: 'Payment Information',
  };

  renderRow = card => <AvatarListItem title={card.cardNumber} note={card.brand} icon={card.icon} />

  render() {
    return (
      <Content>
        <List dataArray={CARDS} renderRow={this.renderRow} />
        <View style={paymentInfoScreenStyle.addCardButton}>
          <Button block>
            <Text>Lägg Till Kort</Text>
          </Button>
        </View>
      </Content>
    );
  }
}
