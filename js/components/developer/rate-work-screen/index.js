import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { Text, View, StyleSheet } from 'react-native';
import RatingScreenStyles from './rateWorkStyles';
import RatingBar from './ratingBar';
import JAButton from '../../common/ja-button';
import { JA_BUTTON } from '../../../resources/constants';
import JALogo from '../../common/ja-logo';
import RecommendationTextbox from './recommendationTextbox';
import I18n from '../../../i18n';
import globalStyle from '../../../resources/globalStyle';


export default class RateWorkScreen extends Component {

  static navigationOptions = {
    title: I18n.t('screen_titles.rate_worker'),
  };

  render() {
    return (
      <Container style={StyleSheet.flatten(globalStyle.whiteBackgroundColor)}>
        <Content
          contentContainerStyle={StyleSheet.flatten(globalStyle.padder)}
        >
          <View style={RatingScreenStyles.alignCenter}>
            <JALogo />
          </View>
          <View style={RatingScreenStyles.alignCenter}>
            <Text
              style={RatingScreenStyles.headerText}
            >{I18n.t('job.rating.thank_you')}</Text>
            <Text
              style={RatingScreenStyles.bodyText}
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
            {/* TODO add actionOnClick functionality*/}
            <JAButton
              content={I18n.t('button_actions.submit')}
              typeOfButton={JA_BUTTON.PRIMARY}
            />
          </View>
        </Content>
      </Container>

    );
  }
}
