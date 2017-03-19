import React from 'react';
import { CardItem, Body, Button, Text } from 'native-base';

const ModalDoneButton = ({ onPress, done }) =>
  <CardItem>
    <Body>
      <Button block onPress={() => onPress()}>
        <Text >{done}</Text>
      </Button>
    </Body>
  </CardItem>;

ModalDoneButton.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  done: React.PropTypes.string,
};
ModalDoneButton.defaultProps = {
  done: 'Done',
};

export default ModalDoneButton;
