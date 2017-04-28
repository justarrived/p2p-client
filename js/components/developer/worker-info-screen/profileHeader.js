import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Thumbnail, Grid, Icon, Col, Row, Text } from 'native-base';
import WorkerInfoStyles from './workerInfoStyles';
import { imageProp } from '../../../resources/propTypes';
import I18n from '../../../i18n';

const noRatingString = I18n.t('job.rating.unrated');

export default class ProfileHeader extends Component {

  static propTypes = {
    picture: imageProp.isRequired,
    rating: React.PropTypes.string,
    priceHr: React.PropTypes.string.isRequired,
    priceTot: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
  };

  static defaultProps = {
    rating: noRatingString,
  }

  render() {
    let starIconIfRating = [];
    let textIfRating =
      (<Text style={StyleSheet.flatten(WorkerInfoStyles.unRatedStyle)}>
        {this.props.rating}
      </Text>);

    if (this.props.rating !== noRatingString) {
      textIfRating =
        (<Text style={StyleSheet.flatten(WorkerInfoStyles.ratingStyle)}>
          {this.props.rating}
        </Text>);
      starIconIfRating =
        <Icon style={StyleSheet.flatten(WorkerInfoStyles.starStyle)} active name="star" />;
    }

    return (
      <Grid>
        <Row>
          <Col style={StyleSheet.flatten(WorkerInfoStyles.topLeftCol)} />
          <Col style={StyleSheet.flatten(WorkerInfoStyles.topMidCol)}>
            <Thumbnail
              style={StyleSheet.flatten(WorkerInfoStyles.logo)}
              source={this.props.picture}
            />
          </Col>
          <Col style={StyleSheet.flatten(WorkerInfoStyles.topRightCol)}>
            <Row style={StyleSheet.flatten(WorkerInfoStyles.starRow)}>
              {textIfRating}
              {starIconIfRating}
            </Row>
            <Row style={StyleSheet.flatten(WorkerInfoStyles.priceRow)}>
              <Text style={StyleSheet.flatten(WorkerInfoStyles.totPriceStyle)}>
                {this.props.priceTot}
              </Text>
            </Row>
            <Row>
              <Text note style={StyleSheet.flatten(WorkerInfoStyles.priceStyle)}>
                {this.props.priceHr}
              </Text>
            </Row>
          </Col>
        </Row>
        <Text style={StyleSheet.flatten(WorkerInfoStyles.nameText)}>
          {this.props.name}
        </Text>
      </Grid>
    );
  }
}
