import React from 'react';
import * as firebase from 'firebase';
import AppNavigator from './appNavigator';

firebase.initializeApp({
  apiKey: 'AIzaSyCY5F5QqKqaVTvwvQQf5EQgu2apNIfG1-0',
  authDomain: 'justarrivedp2p.firebaseapp.com',
  databaseURL: 'https://justarrivedp2p.firebaseio.com',
  storageBucket: 'justarrivedp2p.appspot.com',
  //messagingSenderId: '981762065581',
});

const App = () =>
  <AppNavigator />;

export default App;
