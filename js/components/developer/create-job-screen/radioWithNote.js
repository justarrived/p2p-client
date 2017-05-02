import React from 'react';
import { ListItem, Radio, Left, Right, Text } from 'native-base';

// Radio button list item with title and note.
const RadioWithNote = ({ title, note, selected, onPress }) =>
  <ListItem selected={selected} onPress={onPress} >
    <Left>
      <Radio selected={selected} onPress={onPress} />
      <Text>{title}</Text>
      <Right>
        <Text note>{note}</Text>
      </Right>
    </Left>
  </ListItem>;

RadioWithNote.propTypes = {
  title: React.PropTypes.string.isRequired,
  note: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool.isRequired,
  onPress: React.PropTypes.func.isRequired,
};

export default (RadioWithNote);
