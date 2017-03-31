import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Thumbnail, Grid, Left, Body, ListItem, Icon, Right } from 'native-base';
import I18n from '../../../../I18n/components/developer/sample-screen/I18n';
import WorkerScreenStyle from './chooseWorkerStyles';

const noRatingString = 'No rating yet';

export default class SampleScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screenTitle'),
  };
  static propTypes = {
    rating: React.PropTypes.string,
    author: React.PropTypes.string.isRequired,
    price: React.PropTypes.string.isRequired,
    icon: React.PropTypes.oneOfType([
      React.PropTypes.number.isRequired,
      React.PropTypes.shape({
        uri: React.PropTypes.string.isRequired,
      }),
    ]).isRequired,
  }
  static defaultProps = {
    rating: noRatingString,
  }

  render() {
    let starIconIfRating = [];
    if (this.props.rating !== noRatingString) {
      starIconIfRating =
    (<Icon
      style={StyleSheet.flatten(WorkerScreenStyle.starStyle)}
      active name="star"
    />);
    }
    return (
      <ListItem>
        <Left>
          <Thumbnail
            style={StyleSheet.flatten(WorkerScreenStyle.pictureStyle)}
            source={this.props.icon}
          />
          <Body>
            <Text>{this.props.author}</Text>
            <Grid
              style={WorkerScreenStyle.ratingGridStyle}
            >
              <Text
                note
                style={StyleSheet.flatten(WorkerScreenStyle.ratingStyle)}
              >{this.props.rating}</Text>
              {starIconIfRating}
            </Grid>
          </Body>
        </Left>
        <Right>
          <Grid style={WorkerScreenStyle.priceGridStyle}>
            <Text
              note
              style={StyleSheet.flatten(WorkerScreenStyle.priceStyle)}
            >{this.props.price}</Text>
            <Icon active name="arrow-forward" />
          </Grid>
        </Right>
      </ListItem>
    );
  }
}
