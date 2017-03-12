import React, { Component } from 'react';

import { Item, Label, Input } from 'native-base';

export default class PostCodeInput extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
  }

  render() {
    return (
      <Item stackedLabel>
        <Label>{this.props.title}</Label>
        <Input keyboardType="numeric" maxLength={5} returnKeyType={'next'} />
      </Item>
    );
  }

}
