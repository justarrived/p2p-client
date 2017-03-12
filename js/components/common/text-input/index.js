import React, { Component } from 'react';

import { Item, Label, Input } from 'native-base';

export default class TextInput extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
  }
  render() {
    return (
      <Item stackedLabel>
        <Label>{this.props.title}</Label>
        <Input returnKeyType={'next'} defaultValue={''} />
      </Item>
    );
  }

}
