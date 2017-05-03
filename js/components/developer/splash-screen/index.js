import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container } from 'native-base';
import styles from './style';
import globalStyle from '../../../resources/globalStyle';
import JALogo from '../../common/ja-logo';
import JATagline from '../../common/ja-tagline';

export default class SplashScreen extends Component {

  render() {
    return (
      <Container style={StyleSheet.flatten(globalStyle.whiteBackgroundColor)}>
        <View style={styles.centerContainer}>
          <View style={styles.logoContainer}>
            <JALogo />
          </View>
          <JATagline />
        </View>
      </Container>
    );
  }
}
