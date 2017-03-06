import React, { Component } from 'react';
import {
  Grid,
  Col,
  Form,
  Item,
  Label,
  Input,
  Card,
  CardItem,
  Left,
  Body,
} from 'native-base';

import CardHeader from './cardHeader';

// Temporary constants. These will be moved and implemented in another way in the future!
const DATE_STRING = 'Datum';
const TIME_STRING = 'Tid';

// Card with input fields to specify when the job should be started.
export default class CalendarCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader icon="calendar" title="Datum" subtitle="När ska uppdraget utföras?" />
        <CardItem cardBody>
          <Left>
            <Body>
              <Form >
                <Grid>
                  <Col>
                    <Item floatingLabel>
                      <Label>{DATE_STRING}</Label>
                      <Input />
                    </Item>
                  </Col>
                  <Col>
                    <Item floatingLabel>
                      <Label>{TIME_STRING}</Label>
                      <Input />
                    </Item>
                  </Col>
                </Grid>
              </Form>
            </Body>
          </Left>
        </CardItem>
        <CardItem footer />
      </Card>
    );
  }
}
