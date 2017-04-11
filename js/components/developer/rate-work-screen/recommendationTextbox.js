import React from 'react';
import { Input, Item } from 'native-base';
import I18n from '../../../i18n';

const RecommendationTextbox = () =>
  <Item regular>
    <Input
      multiline
      maxLength={500}
      placeholder={I18n.t('job.rating.write_short_review_here')}
    />
  </Item>;

export default RecommendationTextbox;
