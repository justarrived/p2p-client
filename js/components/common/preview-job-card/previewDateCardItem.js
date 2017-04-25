import React from 'react';
import { Grid, Col, CardItem } from 'native-base';
import I18n from '../../../i18n';

import TextWithStackedNote from '../../common/text-with-stacked-note/textWithStackedNote';

const DATE_STRING = I18n.t('date_and_time.date');
const TIME_STRING = I18n.t('date_and_time.time');

// Card showing when the job should be started, in the job creation preview.
const PreviewDateCardItem = ({ date, time }) =>
  <CardItem bordered>
    <Grid>
      <Col>
        <TextWithStackedNote
          note={DATE_STRING}
          text={date}
        />
      </Col>
      <Col>
        <TextWithStackedNote
          note={TIME_STRING}
          text={time}
        />
      </Col>
    </Grid>
  </CardItem>;

PreviewDateCardItem.propTypes = {
  date: React.PropTypes.string,
  time: React.PropTypes.string,
};

PreviewDateCardItem.defaultProps = {
  date: 'missing',
  time: 'missing',
};

export default PreviewDateCardItem;
