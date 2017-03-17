import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { Text, View } from 'react-native';
import EndButton from './endButton';
import RatingLogo from './logo';
import RatingScreenStyles from './rateWorkStyles';
// import HeaderText from './headerText';
import RecommendationTextbox from './recommendationTextbox';

export default class RateWorkScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <RatingLogo />

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
          <RecommendationTextbox />
          <EndButton />
        </Content>
      </Container>

    );
  }
}
