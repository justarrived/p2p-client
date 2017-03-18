import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import LanguageDisplayList from './languageDisplayList';
import languageDisplayStyles from './languageDisplayStyles';

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

const mapStateToProps = state => ({ myLanguages: state.languages.lang });

export default connect(mapStateToProps)(LanguageDisplayContent);
