import React, { Component } from 'react';
import * as firebase from 'firebase';

import FirebaseLogin from './firebaseLogin';
import FirebaseHome from './firebaseHome';

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCY5F5QqKqaVTvwvQQf5EQgu2apNIfG1-0',
    authDomain: 'justarrivedp2p.firebaseapp.com',
    databaseURL: 'https://justarrivedp2p.firebaseio.com',
    storageBucket: 'justarrivedp2p.appspot.com',
    messagingSenderId: '981762065581',
  });
}

export default class FirebaseExampleScreen extends Component {
  static navigationOptions = {
    title: 'Firebase Example',
  };

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: firebase.auth().currentUser != null,
    };
  }

  updateLogedin() {
    this.setState({
      loggedIn: firebase.auth().currentUser != null,
    });
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <FirebaseLogin
          onLogin={() => this.updateLogedin()}
        />
      );
    }
    return (
      <FirebaseHome
        onLogout={() => this.updateLogedin()}
      />
    );
  }
}
