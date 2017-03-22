import React, { Component } from 'react';

import { Button, Text } from 'native-base';

export default class EndButton extends Component {
  render() {
    return (
      <Button block primary>
        <Text>Slutför</Text>
      </Button>
    );
  }
}
