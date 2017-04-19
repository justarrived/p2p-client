import React, { Component } from 'react';
import { Grid, Col, CardItem } from 'native-base';
import I18n from '../../../i18n';

import TextWithStackedNote from '../../common/text-with-stacked-note/textWithStackedNote';

// Temporary constants. These will be moved and implemented in another way in the future!
const DATE_STRING = I18n.t('date_and_time.date');
const TIME_STRING = I18n.t('date_and_time.time');

// Card showing when the job should be started, in the job creation preview.
export default class CalendarCardPreview extends Component {
  static propTypes = {
    data: React.PropTypes.shape({
      date: React.PropTypes.string,
      time: React.PropTypes.string,
    }).isRequired,
  };

  render() {
    const { date, time } = this.props.data;
    return (
      <CardItem bordered>
        <Grid>
          <Col>
            <TextWithStackedNote text={date} note={DATE_STRING} />
          </Col>
          <Col>
            <TextWithStackedNote text={time} note={TIME_STRING} />
          </Col>
        </Grid>
      </CardItem>
    );
  }
}
