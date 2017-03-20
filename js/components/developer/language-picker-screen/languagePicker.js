import React, { Component } from 'react';
import { Content } from 'native-base';

import ModalCard from '../common/modalCard';
import CardItemButton from '../common/cardItemButton';
import LanguageDisplay from './languageDisplay';

import LanguageSelectionListItem from './languageSelectionListItem';
import SearchList from '../common/searchList';
import { LANGUAGES, languageSearchFilter } from './languageArray';

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
          <SearchList
            dataArrayFilter={languageSearchFilter}
            dataArray={LANGUAGES}
            renderRow={rowData => <LanguageSelectionListItem language={rowData} />}
          />
          <CardItemButton
            text="Done"
            onPress={() => this.setModalVisible(false)}
          />
        </ModalCard>

        <LanguageDisplay onPress={() => this.setModalVisible(true)} />
      </Content>
    );
  }
}
