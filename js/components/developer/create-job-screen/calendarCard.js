import React, { Component } from 'react';
import { Grid, Col, Form, Item, Label, Input, Card, CardItem } from 'native-base';

import CardHeader from '../../common/card-header/cardHeader';

// Temporary constants. These will be moved and implemented in another way in the future!
const DATE_STRING = 'Datum';
const TIME_STRING = 'Tid';

// Card with input fields to specify when the job should be started.
export default class CalendarCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader icon="calendar" title="Datum" subtitle="När ska uppdraget utföras?" />
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
