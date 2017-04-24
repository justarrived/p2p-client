import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Content, Thumbnail, Footer, FooterTab, Button, Text as NBText } from 'native-base';
import styles from './style';

const WHITE = 'white';
const LOGO_URL = 'https://facebook.github.io/react/img/logo_og.png';

export default class WelcomeScreen extends Component {

  render() {
    return (
      <Container style={{ backgroundColor: WHITE }}>
        <Content contentContainerStyle={styles.padder}>
          <View style={styles.logoContainer}>
            <Thumbnail
              style={StyleSheet.flatten(styles.logo)} source={{ uri: LOGO_URL }}
            />
          </View>
          <View>
            <Text style={StyleSheet.flatten(styles.text1)}>
              {'Welcome To People!'}
            </Text>
          </View>
          <View>
            <Text style={StyleSheet.flatten(styles.text2)}>
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
