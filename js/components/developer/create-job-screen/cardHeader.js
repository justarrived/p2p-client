import React, { Component } from 'react';
import { Icon, CardItem, Text, Body } from 'native-base';

// Card header with icon, title and subtitle.
export default class CardHeader extends Component {

  render() {
    return (
      <CardItem header>
        <Icon name={this.props.icon} />
        <Body>
          <Text>{this.props.title}</Text>
          <Text note>{this.props.subtitle}</Text>
        </Body>
      </CardItem>
    );
  }
}

CardHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
};
