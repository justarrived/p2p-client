import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardItem, Left, Right, Icon } from 'native-base';

export default class SingleRowListItem extends Component {

  static propTypes = {
    text: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string,
  };

  static defaultProps = {
    icon: undefined,
  };

  render() {
    const { text, icon } = this.props;

    let iconIfProvided = [];
    if (icon !== undefined) {
      iconIfProvided = (
        <Right>
          <Icon name={icon} />
        </Right>
      );
    }

    return (
      <CardItem bordered button>
        <Left>
          <Text>{text}</Text>
        </Left>
        {iconIfProvided}
      </CardItem>
    );
  }
}
