import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Thumbnail, Grid, Icon, Col, Row, Text } from 'native-base';
import WorkerProfileStyles from './workerProfileStyles';
import { imageProp } from '../../common/propTypes';
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
      (<Text style={StyleSheet.flatten(WorkerProfileStyles.unRatedStyle)}>
        {this.props.rating}
      </Text>);

    if (this.props.rating !== noRatingString) {
      textIfRating =
        (<Text style={StyleSheet.flatten(WorkerProfileStyles.ratingStyle)}>
          {this.props.rating}
        </Text>);
      starIconIfRating =
        <Icon style={StyleSheet.flatten(WorkerProfileStyles.starStyle)} active name="star" />;
    }

    return (
      <Grid>
        <Row>
          <Col style={StyleSheet.flatten(WorkerProfileStyles.topLeftCol)} />
          <Col style={StyleSheet.flatten(WorkerProfileStyles.topMidCol)}>
            <Thumbnail
              style={StyleSheet.flatten(WorkerProfileStyles.logo)}
              source={this.props.picture}
            />
          </Col>
          <Col style={StyleSheet.flatten(WorkerProfileStyles.topRightCol)}>
            <Row style={StyleSheet.flatten(WorkerProfileStyles.starRow)}>
              {textIfRating}
              {starIconIfRating}
            </Row>
            <Row style={StyleSheet.flatten(WorkerProfileStyles.priceRow)}>
              <Text style={StyleSheet.flatten(WorkerProfileStyles.totPriceStyle)}>
                {this.props.priceTot}
              </Text>
            </Row>
            <Row>
              <Text note style={StyleSheet.flatten(WorkerProfileStyles.priceStyle)}>
                {this.props.priceHr}
              </Text>
            </Row>
          </Col>
        </Row>
        <Text style={StyleSheet.flatten(WorkerProfileStyles.nameText)}>
          {this.props.name}
        </Text>
      </Grid>
    );
  }
}
