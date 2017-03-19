import React from 'react';
import { CardItem, Body, Button, Text } from 'native-base';

const ModalDoneButton = ({ onPress, text }) =>
  <CardItem>
    <Body>
      <Button block onPress={() => onPress()}>
        <Text >{text}</Text>
      </Button>
    </Body>
  </CardItem>;

ModalDoneButton.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  text: React.PropTypes.string,
};
ModalDoneButton.defaultProps = {
  text: 'Done',
};

export default ModalDoneButton;
