import React, { Component } from 'react';
import { Text, Body } from 'native-base';

export default class TextWithStackedNote extends Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
    note: React.PropTypes.string.isRequired,
  }

  render() {
    return (
      <Body>
        <Text note>{this.props.note}</Text>
        <Text>{this.props.text}</Text>
      </Body>
    );
  }
}
