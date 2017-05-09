import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Thumbnail, Icon, Body, Right } from 'native-base';
import ReferenceStyles from './referenceStyles';
import JAListItem from '../../common/ja-list-item/JAListItem';

export default class referenceListItem extends Component {

  static propTypes = {
    reference: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
    rating: React.PropTypes.string.isRequired,
    icon: React.PropTypes.oneOfType([
      React.PropTypes.number.isRequired,
      React.PropTypes.shape({ uri: React.PropTypes.string.isRequired }),
    ]).isRequired,
  }

  render() {
    return (
      <JAListItem avatar>
        <Body style={StyleSheet.flatten(ReferenceStyles.iconContainer)}>
          <Thumbnail
            style={StyleSheet.flatten(ReferenceStyles.pictureStyle)} source={this.props.icon}
          />
        </Body>
        <Body>
          <Text multiline numberOfLines={4} style={ReferenceStyles.textStyle}>
            {this.props.reference}
          </Text>
          <Text note style={ReferenceStyles.secondaryTextStyle}>
            {this.props.author}
          </Text>
        </Body>
        <Right>
          <Text note>{this.props.date}</Text>
          <View style={ReferenceStyles.ratingRowStyle}>
            <Text note style={ReferenceStyles.ratingStyle}>
              {this.props.rating}
            </Text>
            <Icon style={StyleSheet.flatten(ReferenceStyles.starStyle)} active name="star" />
          </View>
        </Right>
      </JAListItem>
    );
  }
}
