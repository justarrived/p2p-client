import React, { Component } from 'react';
import { Container, Content, Card } from 'native-base';
import { Text, View, StyleSheet } from 'react-native';
import EndButton from './endButton';
import RatingLogo from './logo';
import RatingScreenStyles from './rateWorkStyles';
import RatingBar from './ratingBar';
import RecommendationTextbox from './recommendationTextbox';

// Render the component
export default class RateWorkScreen extends Component {

  static navigationOptions = {
    title: 'Rate the work',
  };

  render() {
    return (
      <Container>
        <Content style={StyleSheet.flatten(RatingScreenStyles.contentContainerStyle)} >
          <Card>
            <RatingLogo />
            <View style={RatingScreenStyles.textContainer}>
              <Text
                style={RatingScreenStyles.header1Text}
              >Tack!</Text>
              <Text
                style={RatingScreenStyles.header2Text}
              >Hur tyckte du att xx utförde uppdraget?</Text>
              <Text
                style={RatingScreenStyles.ratingText}
              >Punktlighet</Text>
              <RatingBar />
              <Text
                style={RatingScreenStyles.ratingText}
              >Kommunikation</Text>
              <RatingBar />
              <Text
                style={RatingScreenStyles.ratingText}
              >Kvalité på utförande</Text>
              <RatingBar />
            </View>
            <Text
              style={RatingScreenStyles.header3Text}
            >Ge antal stjärnor och skriv gärna en rekommendation som läggs till i xx profil.</Text>
            <View style={RatingScreenStyles.textBox}>
              <RecommendationTextbox />
            </View>
          </Card>
          <EndButton />
        </Content>
      </Container>

    );
  }
}
