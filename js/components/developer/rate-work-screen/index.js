import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { Text, View, StyleSheet } from 'react-native';
import RatingLogo from './logo';
import RatingScreenStyles from './rateWorkStyles';
import RatingBar from './ratingBar';
import JAButton from '../../common/ja-button';
import { JA_BUTTON } from '../../common/constants';
import RecommendationTextbox from './recommendationTextbox';
import I18n from '../../../i18n';
import globalStyle from '../../common/globalStyle';

const LOGO = require('../../../../assets/images/logo.png');

export default class RateWorkScreen extends Component {

  static navigationOptions = {
    title: I18n.t('screen_titles.rate_worker'),
  };

  render() {
    return (
      <Container style={StyleSheet.flatten(globalStyle.whiteBackgroundColor)}>
        <Content style={StyleSheet.flatten(RatingScreenStyles.contentContainerStyle)}>
          <RatingLogo
            icon={LOGO}
          />
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
            <Text
              style={RatingScreenStyles.ratingText}
            >{I18n.t('job.rating.recommendation')}</Text>
          </View>
          <View style={RatingScreenStyles.textBox}>
            <RecommendationTextbox
              placeholder={I18n.t('job.rating.write_review_here')}
            />
          </View>
          <View style={StyleSheet.flatten(RatingScreenStyles.buttonStyle)}>
            <JAButton
              content={I18n.t('job.rating.rate')}
              actionOnClick={() => this.logIn()}
              typeOfButton={JA_BUTTON.PRIMARY}
            />
          </View>
        </Content>
      </Container>

    );
  }
}
