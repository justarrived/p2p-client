import React, { Component } from 'react';
import { Item, Input } from 'native-base';

export default class RecommendationTextbox extends Component {
  render() {
    return (
      <Item regular>
        <Input placeholder="Lorem ipsum dolor~" />
      </Item>
    );
  }
}
