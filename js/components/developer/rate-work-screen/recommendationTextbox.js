import React, { Component } from 'react';
import { Input, InputGroup } from 'native-base';

export default class RecommendationTextbox extends Component {
  render() {
    return (
      <InputGroup borderType="regular">
        <Input placeholder="Skriv din recension här" />
      </InputGroup>
    );
  }
}
