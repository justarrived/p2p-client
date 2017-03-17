import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Content, List } from 'native-base';
import { connect } from 'react-redux';

import languagePickerStyles from './languagePickerStyles';

import LANGUAGES from './languages';

class LanguageDisplay extends Component {
  static propTypes = {
    myLanguages: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  }

  // Get an array with all selected languages
  getMyLanguages() {
    return Array.from(
      LANGUAGES.filter(languageObject =>
        this.props.myLanguages.includes(languageObject.id),
      ),
      languageObject => languageObject);
  }

  // Render the component
  render() {
    if (this.props.myLanguages.length > 0) {
      return (
        <Content >
          <Text style={languagePickerStyles.myLanguagesTitle}>My Languages:</Text>
          <List
            contentContainerStyle={languagePickerStyles.rowList}
            dataArray={this.getMyLanguages()}
            renderRow={rowData =>
              <View style={languagePickerStyles.rowListItem}>
                <Text style={languagePickerStyles.rowListItemText}>{rowData.name}</Text>
              </View>
              }
          />
        </Content>
      );
    }
    return (
      <Text style={languagePickerStyles.myLanguagesEmptyTitle}>Select your languages!</Text>
    );
  }
}

const mapStateToProps = state => ({ myLanguages: state.languages.lang });

export default connect(mapStateToProps)(LanguageDisplay);
