import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Content, Thumbnail, Button, Text as NBText } from 'native-base';
import styles from './style';
import globalStyle from '../../common/globalStyle';

const PICTURE = require('./picture.png');

export default class WelcomeInfoScreen extends Component {

  render() {
    return (
      <Container style={StyleSheet.flatten(globalStyle.whiteBackgroundColor)}>
        <Content contentContainerStyle={styles.padder}>
          <View style={styles.pictureContainer}>
            <Thumbnail
              style={StyleSheet.flatten(styles.picture)} source={PICTURE}
            />
          </View>
          <View>
            <Text style={StyleSheet.flatten(styles.title)}>
              {'Welcome To People!'}
            </Text>
          </View>
          <View>
            <Text style={StyleSheet.flatten(styles.description)}>
              {'People by JustArrived is an initiative to connect newcomers with local people in the Swedish community'}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button style={StyleSheet.flatten(styles.button)} rounded primary>
              <NBText>{'Next'}</NBText>
            </Button>
          </View>
          <View style={styles.buttonContainer2}>
            <Button light transparent style={StyleSheet.flatten(styles.button)} rounded>
              <Text>{'Skip'}</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
