import React, { Component } from 'react';
import { Input, Item } from 'native-base';

export default class RecommendationTextbox extends Component {
  render() {
    return (
      <Item regular>
        <Input placeholder="Skriv din recension här" />
      </Item>
    );
  }
}
