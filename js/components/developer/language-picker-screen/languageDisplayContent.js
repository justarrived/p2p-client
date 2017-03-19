import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import LanguageDisplayList from './languageDisplayList';
import languageDisplayStyles from './languageDisplayStyles';

// Function that returns the correct View depending on myLanguages.length
const LanguageDisplayContent = ({ myLanguages }) => {
  if (myLanguages.length > 0) {
    return <LanguageDisplayList myLanguages={myLanguages} />;
  }
  return (
    <Text style={languageDisplayStyles.myLanguagesEmptyTitle}>Select your languages!</Text>
  );
};

LanguageDisplayContent.propTypes = {
  myLanguages: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
};

//  props tied together with Redux state
const mapStateToProps = state => ({ myLanguages: state.languages.lang });

// Connect class with Redux and export
export default connect(mapStateToProps)(LanguageDisplayContent);
