import React from 'react';
import { Text } from 'react-native';

import languageDisplayStyles from './languageDisplayStyles';

// Function that returns the correct View depending on myLanguages.length
const LanguageDisplayTitle = ({ listTitle }) => {
  if (listTitle) {
    return <Text style={languageDisplayStyles.myLanguagesTitle}>My Languages:</Text>;
  }
  return <Text style={languageDisplayStyles.myLanguagesEmptyTitle}>Select your languages!</Text>;
};

LanguageDisplayTitle.propTypes = {
  listTitle: React.PropTypes.bool.isRequired,
};

// Connect class with Redux and export
export default LanguageDisplayTitle;
