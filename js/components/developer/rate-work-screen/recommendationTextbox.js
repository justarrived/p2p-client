import React from 'react';
import { Input, Item } from 'native-base';

const RecommendationTextbox = () =>
  <Item regular>
    <Input
      multiline
      maxLength={500}
      placeholder="Skriv din recension här"
    />
  </Item>;

export default RecommendationTextbox;
