import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, List, Item, Input } from 'native-base';

import languageSelectionStyles from './languageSelectionStyles';
import LanguageSelectionListItem from './languageSelectionListItem';

import LANGUAGES from './languageArray';

// Returns all elements in languageArray that match the query
function arraySearchFilter(languageArray, query) {
  return languageArray.filter(languageObject =>
        languageObject.name.toLowerCase().startsWith(query.toLowerCase()));
}

export default class LanguageSelectionList extends Component {

  // Constructor setting intitial state
  constructor(props) {
    super(props);
    this.state = {
      preQueryLenght: 0,
      listLanguages: LANGUAGES,
    };
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
      <Card>
        <CardItem >
          <Item rounded>
            <Input
              placeholder=" Search..."
              onChangeText={query => this.search(query)}
            />
          </Item>
        </CardItem>
        <CardItem style={StyleSheet.flatten(languageSelectionStyles.flexList)}>
          <List
            dataArray={this.state.listLanguages}
            renderRow={rowData => (
              <LanguageSelectionListItem language={rowData} />
                )}
          />
        </CardItem>
      </Card>
    );
  }
}
