import React, { Component } from 'react';
import { Grid, Col, Form, Item, Label, Input, Card, CardItem } from 'native-base';
import I18n from '../../../i18n';

import CardHeader from '../../common/card-header/cardHeader';

// Temporary constants. These will be moved and implemented in another way in the future!
const ADDRESS_STRING = I18n.t('account.address');
const CITY_STRING = I18n.t('account.city');
const ZIP_CODE_STRING = I18n.t('account.postal_code');

// TODO add location in redux job creation

// Card with input fields to specify the location of the job.
export default class PlaceCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          icon="pin" title={I18n.t('job.location')}
          subtitle={I18n.t('job.where_will_the_job_be_performed')}
        />
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
