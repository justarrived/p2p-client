import React, { Component } from 'react';
import { Modal } from 'react-native';
import { Content, Card, CardItem, Button, Text, Body, List, Right, Radio, Item, Input } from 'native-base';
import KnownLanguages from './knownLanguages';

// Temporary array with languages
const LANGUAGES = [{ name: 'Swedish', id: 1 }, { name: 'English', id: 2 },
  { name: 'Portuguese', id: 3 }, { name: 'Dutch', id: 4 },
  { name: 'Swahili', id: 5 }, { name: 'Norwegian', id: 6 },
  { name: 'German', id: 7 }, { name: 'Danish', id: 8 },
  { name: 'Finish', id: 9 }];

export default class LanguagePicker extends Component {

  // Constructor setting intitial state
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      myLanguages: [],
    };
  }

  // Get a list with the name of all selected languages
  getMyLanguageNames() {
    return Array.from(
      LANGUAGES.filter(languageObject =>
        this.state.myLanguages.includes(languageObject.id),
      ),
      languageObject => languageObject.name);
  }

  // Display the modal
  setModalVisible(visible) {
    this.setState({
      modalVisible: visible,
    });
  }

  // Search for a specific language
  search(query) {
    alert(`Search query: ${query}`);
  }

  // Add or remove language as a known language
  languageSelection(language) {
    const index = this.state.myLanguages.indexOf(language.id);
    if (index >= 0) {
      this.state.myLanguages.splice(index, 1);
    } else {
      this.state.myLanguages.push(language.id);
    }
    this.forceUpdate();
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
          <Card bordered="true">
            <CardItem bordered="false">
              <Item rounded>
                <Input
                  placeholder=" Search..."
                  onChangeText={query => this.search(query)}
                />
              </Item>
            </CardItem>
            <CardItem
              bordered="false"
              style={{ flex: 1, alignItems: 'flex-start' }}
            >
              <List
                dataArray={LANGUAGES}
                renderRow={rowData =>
                  <Card bordered="true">
                    <CardItem bordered="true" >
                      <Text>{rowData.name}</Text>
                      <Right>
                        <Radio
                          selected={this.state.myLanguages.includes(rowData.id)}
                          onPress={() => this.languageSelection(rowData)}
                        />
                      </Right>
                    </CardItem>
                  </Card>
                    }
              />
            </CardItem>
            <CardItem bordered="false">
              <Body >
                <Button block onPress={() => this.setModalVisible(false)}>
                  <Text >Done</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Modal>

        <Card bordered="true">
          <CardItem
            bordered="true"
            onPress={() => this.setModalVisible(true)}
          >
            <Body >
              <KnownLanguages languages={this.getMyLanguageNames()} />
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
