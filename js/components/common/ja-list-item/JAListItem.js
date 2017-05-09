import React, { Component, PropTypes } from 'react';
import { ListItem } from 'native-base';
import { StyleSheet } from 'react-native';

import JAListItemStyles from './JAListItemStyles';

export default class JAListItem extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <ListItem {...this.props} style={StyleSheet.flatten(JAListItemStyles.listItemStyle)}>
        {this.props.children}
      </ListItem>
    );
  }
}
