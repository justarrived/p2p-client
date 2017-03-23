import React, { Component } from 'react';
import { Grid, Col, Card, CardItem } from 'native-base';

import TextWithStackedNote from '../../common/text-with-stacked-note/textWithStackedNote';
import CardHeader from '../../common/card-header/cardHeader';

// Temporary constants. These will be moved and implemented in another way in the future!
const DATE_STRING = 'Datum';
const TIME_STRING = 'Tid';

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
      <Card>
        <CardHeader icon="calendar" title="Datum" subtitle="När ska uppdraget utföras?" />
        <CardItem>
          <Grid>
            <Col>
              <TextWithStackedNote text={date} note={DATE_STRING} />
            </Col>
            <Col>
              <TextWithStackedNote text={time} note={TIME_STRING} />
            </Col>
          </Grid>
        </CardItem>
      </Card>
    );
  }
}
