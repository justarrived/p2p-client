import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Thumbnail } from 'native-base';
import styles from './style';
import globalStyle from '../../common/globalStyle';
import JAHeader from '../../common/ja-header';
import I18n from '../../../i18n';

const PICTURE = require('../../../../assets/images/logo.png');

export default class SplashScreen extends Component {

  render() {
    return (
      <Container style={StyleSheet.flatten(globalStyle.whiteBackgroundColor)}>
        <Content contentContainerStyle={styles.padder}>
          <View style={styles.logoContainer}>
            <Thumbnail
              resizeMode="contain"
              style={StyleSheet.flatten(styles.logo)} source={PICTURE}
            />
          </View>
          <JAHeader style={styles.logoContainer} />
        </Content>
      </Container>
    );
  }
}
