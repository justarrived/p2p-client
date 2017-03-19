import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { CardItem, List, Item, Input } from 'native-base';

import languageSelectionStyles from './languageSelectionStyles';
import LanguageSelectionListItem from './languageSelectionListItem';
import SearchList from './searchList';

import LANGUAGES from './languageArray';

// Returns all elements in languageArray that match the query
const languageSearchFilter = (languageArray, query) =>
  languageArray.filter(languageObject =>
        languageObject.name.toLowerCase().startsWith(query.toLowerCase()));

export default class LanguageSelectionList extends Component {

  // Render the component
  render() {
    return (
      <SearchList
        dataArrayFilter={languageSearchFilter}
        dataArray={LANGUAGES}
        renderRow={rowData => <LanguageSelectionListItem language={rowData} />}
      />
    );
  }
}
