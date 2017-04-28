import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content } from 'native-base';
import styles from './style';
import globalStyle from '../../common/globalStyle';
import JALogo from '../../common/ja-logo';
import JATagline from '../../common/ja-tagline';

export default class SplashScreen extends Component {

  render() {
    return (
      <Container style={StyleSheet.flatten(globalStyle.whiteBackgroundColor)}>
        <Content contentContainerStyle={styles.padder}>
          <View style={styles.logoContainer}>
            <JALogo />
          </View>
          <View>
            <JATagline />
          </View>
        </Content>
      </Container>
    );
  }
}
