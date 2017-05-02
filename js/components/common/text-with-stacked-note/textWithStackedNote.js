import React, { Component } from 'react';
import { Text, Col } from 'native-base';

export default class TextWithStackedNote extends Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
    note: React.PropTypes.string.isRequired,
  }

  render() {
    return (
      <Col>
        <Text note>{this.props.note}</Text>
        <Text>{this.props.text}</Text>
      </Col>
    );
  }
}
