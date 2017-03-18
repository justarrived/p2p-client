import React from 'react';
import { Card, CardItem } from 'native-base';

import LanguageDisplayContent from './languageDisplayContent';

const LanguageDisplay = ({ onPress }) =>
  <Card bordered>
    <CardItem
      bordered
      onPress={() => onPress()}
    >
      <LanguageDisplayContent />
    </CardItem>
  </Card>;

LanguageDisplay.propTypes = {
  onPress: React.PropTypes.func.isRequired,
};

export default LanguageDisplay;
