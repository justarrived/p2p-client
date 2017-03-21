import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Right,
  Icon,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Body,
} from 'native-base';

import ChooseJobTypeStyles from './chooseJobTypeStyles';

export default class JobTypeCard extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    cover: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string.isRequired,
  };

  // Temporary method to demonstrate component interaction
  pressCard = () => {
    alert(this.props.title);
  }

  render() {
    return (
      <Card>
        {/* Card image header */}
        <CardItem cardBody onPress={this.pressCard}>
          <Thumbnail
            square resizeMode="cover" style={StyleSheet.flatten(ChooseJobTypeStyles.coverPhoto)}
            source={{ uri: `${this.props.cover}` }}
          >
            <Thumbnail source={{ uri: `${this.props.icon}` }} />
          </Thumbnail>
        </CardItem>

        {/* Card body */}
        <CardItem onPress={this.pressCard}>
          <Body>
            <Text>{this.props.title}</Text>
            <Text note>{this.props.subtitle}</Text>
          </Body>
          <Right style={StyleSheet.flatten(ChooseJobTypeStyles.iconRightContainer)}>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
      </Card>
    );
  }
}
