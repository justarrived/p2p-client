import React, { Component } from 'react';
import { Content } from 'native-base';

import LanguageDisplay from './languageDisplay';
import LanguageModal from './languageModal';

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
        <LanguageModal
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
        />

        <LanguageDisplay onPress={() => this.setModalVisible(true)} />
      </Content>
    );
  }
}
