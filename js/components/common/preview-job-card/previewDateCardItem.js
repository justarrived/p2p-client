import React from 'react';
import { Grid, Col, CardItem } from 'native-base';
import moment from 'moment';
import I18n from '../../../i18n';

import TextWithStackedNote from '../../common/text-with-stacked-note/textWithStackedNote';

const DATE_STRING = I18n.t('date_and_time.date');
const TIME_STRING = I18n.t('date_and_time.time');

/*
 Card showing when the job should be started, in the job creation preview.

 Displays localized date and time using moment.
 - 'L' format is localized date, i.e. 'MM/DD/YYYY' for English locale.
 - 'LT' format is localized time, i.e 'HH:mm' for English.
*/
const PreviewDateCardItem = ({ date }) =>
  <CardItem bordered>
    <Grid>
      <Col>
        <TextWithStackedNote
          note={DATE_STRING}
          text={moment(date).format('L')}
        />
      </Col>
      <Col>
        <TextWithStackedNote
          note={TIME_STRING}
          text={moment(date).format('LT')}
        />
      </Col>
    </Grid>
  </CardItem>;

PreviewDateCardItem.propTypes = {
  date: React.PropTypes.string,
};

PreviewDateCardItem.defaultProps = {
  date: 'missing',
};

export default PreviewDateCardItem;
