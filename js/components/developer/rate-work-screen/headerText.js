import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RatingScreenStyles from './rateWorkStyles';


export default class HeaderText extends Component {
  render() {
    return (
      <View style={RatingScreenStyles.textContainer}>
        <Text style={RatingScreenStyles.header1Text}>
          Tack!
        </Text>
        <Text style={RatingScreenStyles.header2Text}>
          Hur tyckte du att xx utförde uppdraget?
        </Text>
        <Text style={RatingScreenStyles.header3Text}>
          Ge antal stjärnor och skriv gärna en rekommendation som läggs till i xx profil.
        </Text>
      </View>
    );
  }
}
