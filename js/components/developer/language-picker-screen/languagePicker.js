import React, { Component } from 'react';
import { Modal } from 'react-native';
import { Content, Card, CardItem } from 'native-base';

import LanguageDisplay from './languageDisplay';
import LanguageSelectionList from './languageSelectionList';

export default class LanguagePicker extends Component {

  // Constructor setting intitial state
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  // Display or hide the modal
  setModalVisible(visible) {
    this.setState({
      modalVisible: visible,
    });
  }

  // Render the component
  render() {
    return (
      <Content>
        <Modal
          visible={this.state.modalVisible}
          animationType={'fade'}
          transparent
          onRequestClose={() => { this.setModalVisible(false); }}
        >
          <LanguageSelectionList
            onDone={() => this.setModalVisible(false)}
          />
        </Modal>

        <LanguageDisplay onPress={() => this.setModalVisible(true)} />
      </Content>
    );
  }
}
