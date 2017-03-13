import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Content, List } from 'native-base';
import languagePickerStyles from './languagePickerStyles';

export default class KnownLanguages extends Component {
  static propTypes = {
    languages: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired,
    })).isRequired,
  }

  // Render the component
  render() {
    if (this.props.languages.length > 0) {
      return (
        <Content >
          <Text style={languagePickerStyles.myLanguagesTitle}>My Languages:</Text>
          <List
            contentContainerStyle={languagePickerStyles.rowList}
            dataArray={this.props.languages}
            renderRow={rowData =>
              <View style={languagePickerStyles.rowListItem}>
                <Text style={languagePickerStyles.rowListItemText}>{rowData.name}</Text>
              </View>
              }
          />
        </Content >
      );
    }
    return (
      <Text style={languagePickerStyles.myLanguagesEmptyTitle}>Select your languages!</Text>
    );
  }
}
