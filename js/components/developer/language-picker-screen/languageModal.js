import React from 'react';
import { Modal } from 'react-native';
import { Card, CardItem, Button, Text, Body } from 'native-base';

import LanguageSelectionList from './languageSelectionList';

const LanguageModal = ({ onRequestClose, visible }) =>
  <Modal
    visible={visible}
    animationType={'fade'}
    transparent
    onRequestClose={() => onRequestClose()}
  >
    <Card>
      <LanguageSelectionList />
      <CardItem >
        <Body >
          <Button block onPress={() => onRequestClose()}>
            <Text >Done</Text>
          </Button>
        </Body>
      </CardItem>
    </Card>
  </Modal>;

LanguageModal.propTypes = {
  onRequestClose: React.PropTypes.func.isRequired,
  visible: React.PropTypes.bool.isRequired,
};

export default LanguageModal;
