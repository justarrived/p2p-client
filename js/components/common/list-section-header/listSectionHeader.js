import React, { Component } from 'react';
import { Text, ListItem } from 'native-base';

export default class ListSectionHeader extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
  }

  render() {
    return (
      <ListItem>
        <Text note>{this.props.title}</Text>
      </ListItem>
    );
  }
}
