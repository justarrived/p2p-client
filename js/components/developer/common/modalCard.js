import React from 'react';
import { Modal } from 'react-native';
import { Card } from 'native-base';

// Function returns a Modal with a Card that display 'children'
const ModalCard = ({ onRequestClose, visible, children }) =>
  <Modal
    visible={visible}
    animationType={'fade'}
    transparent
    onRequestClose={() => onRequestClose()}
  >
    <Card >
      {children}
    </Card>
  </Modal>;

// PropTypes.node is any element/s that can be rendered
ModalCard.propTypes = {
  onRequestClose: React.PropTypes.func.isRequired,
  visible: React.PropTypes.bool.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default ModalCard;
