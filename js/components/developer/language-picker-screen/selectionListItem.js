import React from 'react';
import { Card, CardItem, Text, Right, Radio } from 'native-base';

// Function returns a selectable item intended for use in lists
const SelectionListItem = ({ onPress, text, selected }) =>
  <Card bordered="false">
    <CardItem onPress={() => onPress()}>
      <Text>{text}</Text>
      <Right>
        <Radio
          selected={selected}
          onPress={() => onPress()}
        />
      </Right>
    </CardItem>
  </Card>;

SelectionListItem.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool.isRequired,
};

export default (SelectionListItem);
