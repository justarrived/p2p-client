import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { CardItem, Body, Text, Right, Icon } from 'native-base';
import SimpleCardBodyStyle from './simpleCardBodyStyle';

// Card body with title, subtitle, and optionally an icon.
export default class SimpleCardBody extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string,
    onPress: React.PropTypes.func,
  };

  static defaultProps = {
    icon: undefined,
    onPress: undefined,
  };

  render() {
    // Only show icon if it is provided as a prop
    let iconIfProvided = [];
    if (this.props.icon !== undefined) {
      iconIfProvided = (
        <Right style={StyleSheet.flatten(SimpleCardBodyStyle.iconRightContainer)}>
          <Icon name={this.props.icon} />
        </Right>
      );
    }

    return (
      <CardItem onPress={this.props.onPress}>
        <Body>
          <Text>{this.props.title}</Text>
          <Text note>{this.props.subtitle}</Text>
        </Body>
        {iconIfProvided}
      </CardItem>
    );
  }
}
