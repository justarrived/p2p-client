import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Thumbnail } from 'native-base';
import RatingScreenStyles from './rateWorkStyles';

export default class RatingLogo extends Component {
  render() {
    return (
      <View style={StyleSheet.flatten(RatingScreenStyles.logoContainer)}>
        <Thumbnail
          style={StyleSheet.flatten(RatingScreenStyles.logo)} source={{
            uri: 'https://facebook.github.io/react/img/logo_og.png',
          }}
        />
      </View>
    );
  }
}
