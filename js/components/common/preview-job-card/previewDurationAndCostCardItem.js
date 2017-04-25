import React from 'react';
import { CardItem, Right, Text, Body, Grid, Row } from 'native-base';
import I18n from '../../../i18n';

// Card showing the duration of the job, in the job creation preview.
const PreviewDurationAndCostCardItem = ({ duration, cost }) =>
  <CardItem bordered>
    <Grid>
      <Row>
        <Text note>{I18n.t('job.job_duration')}</Text>
      </Row>
      <Row>
        <Body>
          <Text>{duration}</Text>
        </Body>
        <Right>
          <Text note>{cost}</Text>
        </Right>
      </Row>
    </Grid>
  </CardItem>;

PreviewDurationAndCostCardItem.propTypes = {
  duration: React.PropTypes.string,
  cost: React.PropTypes.string,
};

PreviewDurationAndCostCardItem.defaultProps = {
  duration: 'missing',
  cost: 'missing',
};

export default PreviewDurationAndCostCardItem;
