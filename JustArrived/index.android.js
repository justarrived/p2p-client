import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import IndexScene from './js/index.scene';

class JustArrived extends Component {
  render() {
    return (
      <IndexScene />
    )
  }
}

AppRegistry.registerComponent('JustArrived', () => JustArrived);