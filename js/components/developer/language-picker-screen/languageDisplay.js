import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, CardItem, Right } from 'native-base';
import { connect } from 'react-redux';

import LanguageDisplayTitle from './languageDisplayTitle';
import LanguageDisplayList from './languageDisplayList';
import languageDisplayStyles from './languageDisplayStyles';

// Function that returns Card with pressable cards and language info
const LanguageDisplay = ({ onPress, languages }) =>
  <Card>
    <CardItem
      style={StyleSheet.flatten(languageDisplayStyles.cardItemTitle)}
      onPress={() => onPress()}
    >
      <LanguageDisplayTitle listTitle={languages.length > 0} />
      <Right>
        <Text>Edit</Text>
      </Right>
    </CardItem>
    <CardItem
      style={StyleSheet.flatten(languageDisplayStyles.cardItemList)}
      onPress={() => onPress()}
    >
      <LanguageDisplayList languages={languages} />
    </CardItem>
  </Card>;

LanguageDisplay.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  languages: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
};

//  props tied together with Redux state
const mapStateToProps = state => ({ languages: state.languages.lang });

// Connect class with Redux and export
export default connect(mapStateToProps)(LanguageDisplay);
