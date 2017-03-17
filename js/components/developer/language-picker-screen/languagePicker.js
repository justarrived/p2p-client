import React, { Component } from 'react';
import { Modal, StyleSheet } from 'react-native';
import { Content, Card, CardItem, Button, Text, Body, List, Item, Input } from 'native-base';

import KnownLanguages from './knownLanguages';
import languagePickerStyles from './languagePickerStyles';
import LanguageSelectionListItem from './languageSelectionListItem';

import LANGUAGES from './languages';

// Returns all elements in languageArray that match the query
function arraySearchFilter(languageArray, query) {
  return languageArray.filter(languageObject =>
        languageObject.name.toLowerCase().startsWith(query.toLowerCase()));
}

export default class LanguagePicker extends Component {

  // Constructor setting intitial state
  constructor(props) {
    super(props);
    this.state = {
      preQueryLenght: 0,
      modalVisible: false,
      listLanguages: LANGUAGES,
    };
  }

  // Display or hide the modal
  setModalVisible(visible) {
    this.setState({
      preQueryLenght: 0,
      modalVisible: visible,
      listLanguages: LANGUAGES,
    });
    // this.forceUpdate();
  }

  // Search for a specific language
  search(query) {
    if (this.state.listLanguages.length > 0
      || query.length < this.state.preQueryLenght) {
      if (query.length === 0) {
        // Display all languages
        this.setState({
          preQueryLenght: 0,
          listLanguages: LANGUAGES,
        });
      } else if (query.length > this.state.preQueryLenght) {
        this.setState({
          // Filter the currently displayed languages
          preQueryLenght: query.length,
          listLanguages: arraySearchFilter(this.state.listLanguages, query),
        });
      } else {
        // Filter all languages
        this.setState({
          preQueryLenght: query.length,
          listLanguages: arraySearchFilter(LANGUAGES, query),
        });
      }
    }
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
          <Card bordered>
            <CardItem >
              <Item rounded>
                <Input
                  placeholder=" Search..."
                  onChangeText={query => this.search(query)}
                />
              </Item>
            </CardItem>
            <CardItem style={StyleSheet.flatten(languagePickerStyles.flexList)}>
              <List
                dataArray={this.state.listLanguages}
                renderRow={rowData => (
                  <LanguageSelectionListItem language={rowData} />
                )}
              />
            </CardItem>
            <CardItem >
              <Body >
                <Button block onPress={() => this.setModalVisible(false)}>
                  <Text >Done</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Modal>

        <Card bordered>
          <CardItem
            bordered
            onPress={() => this.setModalVisible(true)}
          >
            <KnownLanguages />
          </CardItem>
        </Card>
      </Content>
    );
  }
}
