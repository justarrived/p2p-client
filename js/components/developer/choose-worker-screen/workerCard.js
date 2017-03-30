import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Thumbnail, Grid, Left, Body, ListItem, Icon, Right } from 'native-base';
import I18n from '../../../../I18n/components/developer/sample-screen/I18n';
import WorkerScreenStyle from './chooseWorkerStyles';

export default class SampleScreen extends Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    rating: React.PropTypes.string.isRequired,
    price: React.PropTypes.string.isRequired,
  }
  static navigationOptions = {
    title: I18n.t('screenTitle'),
  };

  render() {
    const { name, rating, price } = this.props;
    return (
      <ListItem>
        <Left>
          <Thumbnail
            style={StyleSheet.flatten(WorkerScreenStyle.pictureStyle)}
            source={{
              uri: 'https://facebook.github.io/react/img/logo_og.png',
            }}
          />
          <Body>
            <Text>{name}</Text>
            <Grid
              style={WorkerScreenStyle.ratingGridStyle}
            >
              <Text
                note style={StyleSheet.flatten(WorkerScreenStyle.ratingStyle)}
              >{rating}/5</Text>
              <Thumbnail
                style={StyleSheet.flatten(WorkerScreenStyle.starStyle)} source={{
                  uri: 'https://facebook.github.io/react/img/logo_og.png',
                }}
              />
            </Grid>
          </Body>
        </Left>
        <Right>
          <Grid style={WorkerScreenStyle.priceGridStyle}>
            <Text
              style={StyleSheet.flatten(WorkerScreenStyle.priceStyle)}
            >{price}</Text>
            <Icon active name="arrow-forward" />
          </Grid>
        </Right>
      </ListItem>
    );
  }
}
