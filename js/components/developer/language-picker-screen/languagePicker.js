import React, { Component } from 'react';
import { Content } from 'native-base';

import ModalCard from './modalCard';
import ModalDoneButton from './modalDoneButton';
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
        <ModalCard
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
        >
          <LanguageSelectionList />
          <ModalDoneButton onPress={() => this.setModalVisible(false)} />
        </ModalCard>

        <LanguageDisplay onPress={() => this.setModalVisible(true)} />
      </Content>
    );
  }
}
