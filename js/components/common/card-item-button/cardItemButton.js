import React from 'react';
import { CardItem, Body, Button, Text } from 'native-base';

const CardItemButton = ({ onPress, text, disabled }) =>
  <CardItem>
    <Body>
      <Button
        block
        onPress={() => onPress()}
        disabled={disabled}
      >
        <Text >{text}</Text>
      </Button>
    </Body>
  </CardItem>;

CardItemButton.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  text: React.PropTypes.string,
  disabled: React.PropTypes.bool,
};
CardItemButton.defaultProps = {
  text: 'ok',
  disabled: false,
};

export default CardItemButton;
