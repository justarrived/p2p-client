import React, { Component } from 'react';
import { Grid, Col, Form, Item, Label, Input, Card, CardItem } from 'native-base';

import CardHeader from '../../common/card-header/cardHeader';

// Temporary constants. These will be moved and implemented in another way in the future!
const ADDRESS_STRING = 'Adress';
const CITY_STRING = 'Stad';
const ZIP_CODE_STRING = 'Postnummer';

// Card with input fields to specify the location of the job.
export default class PlaceCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader icon="pin" title="Plats" subtitle="Var ska uppdraget utföras?" />
        <Form>
          <Item floatingLabel>
            <Label>{ADDRESS_STRING}</Label>
            <Input />
          </Item>
          <Grid>
            <Col>
              <Item floatingLabel>
                <Label>{ZIP_CODE_STRING}</Label>
                <Input keyboardType="numeric" />
              </Item>
            </Col>
            <Col>
              <Item floatingLabel>
                <Label>{CITY_STRING}</Label>
                <Input />
              </Item>
            </Col>
          </Grid>
        </Form>
        <CardItem footer />
      </Card>
    );
  }
}
