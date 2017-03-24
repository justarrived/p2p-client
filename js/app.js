import React, { Component } from 'react';
import AppNavigator from './appNavigator';

class App extends Component {

  constructor(props) {
    super(props);
  }

  // This is the place for CodePush and similar modules
  render() {
    return <AppNavigator />;
  }

}

export default App;
