import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Text, Right, CheckBox } from 'native-base';

import SelectionListItemStyles from './selectionListItemStyles';

// Function returns a selectable item intended for use in lists
const SelectionListItem = ({ onPress, text, selected }) =>
  <ListItem
    onPress={() => onPress()}
    style={StyleSheet.flatten(SelectionListItemStyles.listItem)}
  >
    <Text style={StyleSheet.flatten(SelectionListItemStyles.listItemText)}>{text}</Text>
    <Right>
      <CheckBox
        checked={selected}
        onPress={() => onPress()}
      />
    </Right>
  </ListItem>;

SelectionListItem.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool.isRequired,
};

export default (SelectionListItem);
