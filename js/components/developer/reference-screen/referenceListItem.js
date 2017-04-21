import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Thumbnail, ListItem, Icon } from 'native-base';
import ReferenceStyles from './referenceStyles';


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
      <ListItem style={StyleSheet.flatten(ReferenceStyles.listItemStyle)}>
        <View style={StyleSheet.flatten(ReferenceStyles.listItemViewStyle)}>
          <Thumbnail
            style={StyleSheet.flatten(ReferenceStyles.pictureStyle)} source={this.props.icon}
          />
          <View style={ReferenceStyles.midColSize}>
            <View>
              <Text
                multiline
                numberOfLines={4}
                style={StyleSheet.flatten(ReferenceStyles.textStyle)}
              >{this.props.reference}
              </Text>
            </View>
            <View>
              <Text
                note
                style={StyleSheet.flatten(ReferenceStyles.secondaryTextStyle)}
              >{this.props.author}
              </Text>
            </View>
          </View>
          <View style={ReferenceStyles.rightColStyle}>
            <Text
              note
              style={StyleSheet.flatten(ReferenceStyles.secondaryTextStyle)}
            >{this.props.date}
            </Text>
            <View style={ReferenceStyles.ratingRowStyle}>
              <Text
                note
                style={StyleSheet.flatten(ReferenceStyles.ratingStyle)}
              >{this.props.rating}
              </Text>
              <Icon style={StyleSheet.flatten(ReferenceStyles.starStyle)} active name="star" />
            </View>
          </View>
        </View>
      </ListItem>
    );
  }
}
