import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';
import RatingScreenStyles from './rateWorkStyles';

export default class RatingLogo extends Component {
  render() {
    return (
      <View style={RatingScreenStyles.logoContainer}>
        <Image
          style={RatingScreenStyles.logo} source={{
            uri: 'https://facebook.github.io/react/img/logo_og.png',
          }}
        />
      </View>
    );
  }
}
