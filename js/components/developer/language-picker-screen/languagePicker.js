import React, { Component } from 'react';
import { Content } from 'native-base';

import ModalCard from '../../common/modal-card/modalCard';
import CardItemButton from '../../common/card-item-button/cardItemButton';
import LanguageDisplay from './languageDisplay';
import I18n from '../../../i18n';

import LanguageSelectionListItem from './languageSelectionListItem';
import SearchList from '../../common/search-list/searchList';
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
            text={I18n.t('button_actions.done')}
            onPress={() => this.setModalVisible(false)}
          />
        </ModalCard>

        <LanguageDisplay onPress={() => this.setModalVisible(true)} />
      </Content>
    );
  }
}
