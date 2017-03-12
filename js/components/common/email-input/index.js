import React, { Component } from 'react';

import { Item, Label, Input } from 'native-base';

export default class EmailInput extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
  }
  render() {
    return (
      <Item >
        <Label>{this.props.title}</Label>
        <Input keyboardType="email-address" />
      </Item>
    );
  }

}
