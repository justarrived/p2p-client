import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { List } from 'native-base';

import languageDisplayStyles from './languageDisplayStyles';

import { LANGUAGES } from './languageArray';

export default class LanguageDisplayList extends Component {
  static propTypes = {
    languages: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  }

  // Get an array with all selected languages
  getLanguages() {
    const tmpArray = [];
    this.props.languages.forEach((languageId) => {
      if (LANGUAGES.length > languageId && languageId === LANGUAGES[languageId].id) {
        tmpArray.push(LANGUAGES[languageId]);
      } else {
        console.warn(`language id ${languageId} mismatch`);
      }
    });
    return tmpArray;
  }

  // Render the component
  render() {
    return (
      <List
        contentContainerStyle={languageDisplayStyles.rowList}
        dataArray={this.getLanguages()}
        renderRow={rowData =>
          <View style={languageDisplayStyles.rowListItem}>
            <Text style={languageDisplayStyles.rowListItemText}>{rowData.name}</Text>
          </View>
          }
      />
    );
  }
}
