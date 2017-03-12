import React, { Component } from 'react';

import { Item, Label, Input } from 'native-base';

export default class EmailInput extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    stacked: React.PropTypes.bool,
    floating: React.PropTypes.bool,
    disable: React.PropTypes.bool,
  }

  render() {
    const floating = this.props.floating;
    const stacked = this.props.stacked;
    const disable = this.props.disable;
    return (
      <Item stackedLabel={stacked} floatingLabel={floating} disable>
        <Label>{this.props.title}</Label>
        <Input keyboardType="email-address" defaultValue={''} disabled={disable} />
      </Item>
    );
  }

}
