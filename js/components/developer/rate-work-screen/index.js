import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import RatingScreenStyles from './rateWorkStyles';
import RatingBar from './ratingBar';
import JAButton from '../../common/ja-button';
import { JA_BUTTON } from '../../../resources/constants';
import JALogo from '../../common/ja-logo';
import RecommendationTextbox from './recommendationTextbox';
import I18n from '../../../i18n';
import globalStyle from '../../../resources/globalStyle';

import { navigate } from '../../../actions/navigation';


class RateWorkScreen extends Component {

  static navigationOptions = {
    title: I18n.t('screen_titles.rate_worker'),
  };

  static propTypes = {
    navigate: React.PropTypes.func,
  };

  static defaultProps = {
    navigate: undefined,
  };

  render() {
    return (
      <Container style={StyleSheet.flatten(globalStyle.whiteBackgroundColor)}>
        <Content contentContainerStyle={StyleSheet.flatten(globalStyle.padder)}>
          <View style={RatingScreenStyles.alignCenter}>
            <JALogo />
            <Text
              style={RatingScreenStyles.headerText}
            >{I18n.t('task.rating.thank_you')}</Text>
            <Text
              style={RatingScreenStyles.bodyText}
            >{I18n.t('task.rating.how_did_the_worker_perform_the_task')}</Text>
            <Text
              style={RatingScreenStyles.ratingText}
            >{I18n.t('task.rating.punctuality')}</Text>
            <RatingBar />
            <Text
              style={RatingScreenStyles.ratingText}
            >{I18n.t('task.rating.communication')}</Text>
            <RatingBar />
            <Text
              style={RatingScreenStyles.ratingText}
            >{I18n.t('task.rating.quality_of_service')}</Text>
            <RatingBar />
            <Text
              style={RatingScreenStyles.ratingText}
            >{I18n.t('task.rating.write_a_recommendation')}</Text>
          </View>
          <View style={RatingScreenStyles.textBox}>
            <RecommendationTextbox placeholder={I18n.t('task.rating.write_review_here')} />
          </View>
          <View style={StyleSheet.flatten(RatingScreenStyles.buttonStyle)}>
            {/* TODO add actionOnClick functionality*/}
            <JAButton
              content={I18n.t('button_actions.submit')}
              typeOfButton={JA_BUTTON.PRIMARY}
              actionOnClick={() => this.props.navigate('ConfirmationScreen')}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    navigate: (routeName, params) => dispatch(navigate(routeName, params)),
  };
}

const mapStateToProps = state => ({ navigation: state.navigation });

export default connect(mapStateToProps, bindAction)(RateWorkScreen);
