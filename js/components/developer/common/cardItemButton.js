import React from 'react';
import { CardItem, Body, Button, Text } from 'native-base';

const CardItemButton = ({ onPress, text }) =>
  <CardItem>
    <Body>
      <Button block onPress={() => onPress()}>
        <Text >{text}</Text>
      </Button>
    </Body>
  </CardItem>;

CardItemButton.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  text: React.PropTypes.string,
};
CardItemButton.defaultProps = {
  text: 'ok',
};

export default CardItemButton;
