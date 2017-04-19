import React, { Component } from 'react';
import { Container, Content, Card } from 'native-base';
import { Text, View, StyleSheet } from 'react-native';
import EndButton from './endButton';
import RatingLogo from './logo';
import RatingScreenStyles from './rateWorkStyles';
import RatingBar from './ratingBar';
import RecommendationTextbox from './recommendationTextbox';
import I18n from '../../../i18n';

// Render the component
export default class RateWorkScreen extends Component {

  static navigationOptions = {
    title: I18n.t('screen_titles.rate_worker'),
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
              >{I18n.t('job.rating.thank_you')}</Text>
              <Text
                style={RatingScreenStyles.header2Text}
              >{I18n.t('job.rating.how_did_the_worker_perform_the_job')}</Text>
              <Text
                style={RatingScreenStyles.ratingText}
              >{I18n.t('job.rating.punctuality')}</Text>
              <RatingBar />
              <Text
                style={RatingScreenStyles.ratingText}
              >{I18n.t('job.rating.communication')}</Text>
              <RatingBar />
              <Text
                style={RatingScreenStyles.ratingText}
              >{I18n.t('job.rating.work_quality')}</Text>
              <RatingBar />
            </View>
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
