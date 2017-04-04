import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Thumbnail, Body, Row, Left, ListItem, Icon, Right } from 'native-base';
import ChooseWorkerStyles from './chooseWorkerStyles';

const noRatingString = 'No rating yet';

export default class WorkerListItem extends Component {
  static propTypes = {
    rating: React.PropTypes.string,
    author: React.PropTypes.string.isRequired,
    price: React.PropTypes.string.isRequired,
    icon: React.PropTypes.oneOfType([
      React.PropTypes.number.isRequired,
      React.PropTypes.shape({ uri: React.PropTypes.string.isRequired }),
    ]).isRequired,
  }

  static defaultProps = {
    rating: noRatingString,
  }

  render() {
    let starIconIfRating = [];
    if (this.props.rating !== noRatingString) {
      starIconIfRating =
        <Icon style={StyleSheet.flatten(ChooseWorkerStyles.starStyle)} active name="star" />;
    }

    return (
      <ListItem onPress={() => alert(this.props.author)}>
        <Left>
          <Thumbnail
            style={StyleSheet.flatten(ChooseWorkerStyles.pictureStyle)} source={this.props.icon}
          />
          <Body>
            <Text>{this.props.author}</Text>
            <Row>
              <Text note>
                {this.props.rating}
              </Text>
              {starIconIfRating}
            </Row>
          </Body>
        </Left>
        <Right style={StyleSheet.flatten(ChooseWorkerStyles.priceGridStyle)}>
          <Text note style={StyleSheet.flatten(ChooseWorkerStyles.priceStyle)}>
            {this.props.price}
          </Text>
          <Icon active name="arrow-forward" />
        </Right>
      </ListItem>
    );
  }
}