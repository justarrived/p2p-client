import React, { Component } from 'react';
import { Grid, Col, Form, Item, Label, Input, Card, CardItem } from 'native-base';

import CardHeader from '../../common/card-header/cardHeader';
import I18n from '../../../i18n';

// Temporary constants. These will be moved and implemented in another way in the future!
const DATE_STRING = I18n.t('date_and_time.date');
const TIME_STRING = I18n.t('date_and_time.time');

// Card with input fields to specify when the job should be started.
export default class CalendarCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          icon="calendar" title={I18n.t('date_and_time.date')}
          subtitle={I18n.t('job.when_will_the_job_be_performed')}
        />
        <Form >
          <Grid>
            <Col>
              <Item floatingLabel>
                <Label>{DATE_STRING}</Label>
                <Input keyboardType="numeric" />
              </Item>
            </Col>
            <Col>
              <Item floatingLabel>
                <Label>{TIME_STRING}</Label>
                <Input keyboardType="numeric" />
              </Item>
            </Col>
          </Grid>
        </Form>
        <CardItem footer />
      </Card>
    );
  }
}
