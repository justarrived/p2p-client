import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Thumbnail } from 'native-base';
import RatingScreenStyles from './rateWorkStyles';
import { imageProp } from '../../common/propTypes';


export default class RatingLogo extends Component {

  static propTypes = {
    icon: imageProp.isRequired,
  }

  render() {
    return (
      <View style={StyleSheet.flatten(RatingScreenStyles.logoContainer)}>
        <Thumbnail
          style={StyleSheet.flatten(RatingScreenStyles.logo)} source={this.props.icon}
        />
      </View>
    );
  }
}
