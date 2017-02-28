
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Container, Content, Text, View } from 'native-base';

import AppNavigator from './appNavigator';
import IndexScene from './index.scene';
import Home from './components/home/';
var Navigator = require('./appNavigator');

class App extends Component {

  constructor(props) {
      super(props);
    }
  /*
  This is the place for CodePush and similar modules
  */
  render(){
    return <AppNavigator />;
  }


}

export default App;
