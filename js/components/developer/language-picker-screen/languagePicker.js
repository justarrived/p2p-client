import React, { Component } from 'react';
import { Modal, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Content, Card, CardItem, Button, Text, Body, List, Right, Radio, Item, Input } from 'native-base';

import KnownLanguages from './knownLanguages';
import languagePickerStyles from './languagePickerStyles';
import { addLanguage, removeLanguage } from '../../../actions/languages';

// Temporary array with languages
const LANGUAGES = [{ name: 'Abkhaz', id: 1 }, { name: 'Adyghe', id: 2 },
  { name: 'Afrikaans', id: 3 }, { name: 'Akan', id: 4 },
  { name: 'Albanian', id: 5 }, { name: 'Amharic', id: 6 },
  { name: 'Arabic', id: 7 }, { name: 'Aragonese', id: 8 },
  { name: 'Aramaic', id: 9 }, { name: 'Armenian', id: 10 },
  { name: 'Aymara', id: 11 }, { name: 'English', id: 12 },
  { name: 'French', id: 13 }, { name: 'German', id: 14 },
  { name: 'Mandarin', id: 15 }, { name: 'Swahili', id: 16 },
  { name: 'Swedish', id: 17 }, { name: 'Tagalog', id: 18 }];

// Returns all elements in languageArray that match the query
function arraySearchFilter(languageArray, query) {
  return languageArray.filter(languageObject =>
        languageObject.name.toLowerCase().startsWith(query.toLowerCase()));
}

class LanguagePicker extends Component {

  static propTypes = {
    addLanguage: React.PropTypes.func.isRequired,
    removeLanguage: React.PropTypes.func.isRequired,
    myLanguages: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  }

  // Constructor setting intitial state
  constructor(props) {
    super(props);
    this.state = {
      preQueryLenght: 0,
      modalVisible: false,
      listLanguages: LANGUAGES,
    };
  }

  // Get an array with all selected languages
  getMyLanguages() {
    return Array.from(
      LANGUAGES.filter(languageObject =>
        this.props.myLanguages.includes(languageObject.id),
      ),
      languageObject => languageObject);
  }

  // Display or hide the modal
  setModalVisible(visible) {
    this.setState({
      preQueryLenght: 0,
      modalVisible: visible,
      listLanguages: LANGUAGES,
    });
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

  // Add or remove language as a known language
  languageSelection(language, remove) {
    if (remove) {
      this.props.removeLanguage(language.id);
    } else {
      this.props.addLanguage(language.id);
    }
    this.forceUpdate();
  }

  // Render a row in the modal
  renderRow(rowData) {
    const selected = this.props.myLanguages.includes(rowData.id);
    return (
      <Card bordered>
        <CardItem bordered >
          <Text>{rowData.name}</Text>
          <Right>
            <Radio
              selected={selected}
              onPress={() => this.languageSelection(rowData, selected)}
            />
          </Right>
        </CardItem>
      </Card>
    );
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
                renderRow={rowData => this.renderRow(rowData)}
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
            <KnownLanguages languages={this.getMyLanguages()} />
          </CardItem>
        </Card>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    addLanguage: name => dispatch(addLanguage(name)),
    removeLanguage: name => dispatch(removeLanguage(name)),
  };
}

const mapStateToProps = state => ({ myLanguages: state.languages.lang });

export default connect(mapStateToProps, bindAction)(LanguagePicker);
