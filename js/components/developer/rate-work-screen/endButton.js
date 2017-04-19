import React, { Component } from 'react';

import { Button, Text } from 'native-base';
import I18n from '../../../i18n';

export default class EndButton extends Component {
  render() {
    return (
      <Button block primary>
        <Text>{I18n.t('job.rating.rate')}</Text>
      </Button>
    );
  }
}
