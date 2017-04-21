import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Thumbnail, Grid, Icon, Col, Row, Text } from 'native-base';
import WorkerProfileStyles from './workerProfileStyles';
import { imageProp } from '../../common/propTypes';

export default class ProfileHeader extends Component {

  static propTypes = {
    picture: imageProp.isRequired,
    rating: React.PropTypes.string.isRequired,
    priceHr: React.PropTypes.string.isRequired,
    priceTot: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <View>
        <Grid>
          <Row style={StyleSheet.flatten(WorkerProfileStyles.topRow)}>
            <Col style={StyleSheet.flatten(WorkerProfileStyles.topLeftCol)} />
            <Col style={StyleSheet.flatten(WorkerProfileStyles.topMidCol)}>
              <Thumbnail
                style={StyleSheet.flatten(WorkerProfileStyles.logo)}
                source={this.props.picture}
              />
            </Col>
            <Col style={StyleSheet.flatten(WorkerProfileStyles.topRightCol)}>
              <Row>
                <Text
                  style={StyleSheet.flatten(WorkerProfileStyles.ratingStyle)}
                >{this.props.rating}</Text>
                <Icon
                  style={StyleSheet.flatten(WorkerProfileStyles.starStyle)}
                  active name="star"
                />
              </Row>
              <Row style={StyleSheet.flatten(WorkerProfileStyles.priceRow)}>
                <Text
                  style={StyleSheet.flatten(WorkerProfileStyles.priceStyle)}
                >{this.props.priceTot} Kr</Text>
              </Row>
              <Row>
                <Text
                  style={StyleSheet.flatten(WorkerProfileStyles.priceStyle)}
                >{this.props.priceHr} Kr/h</Text>
              </Row>
            </Col>
          </Row>
          <Text style={StyleSheet.flatten(WorkerProfileStyles.nameText)}>
            {this.props.name}
          </Text>
        </Grid>
      </View>
    );
  }
}
