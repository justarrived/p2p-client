import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Form, Item, Label, Input, Card, CardItem } from 'native-base';

import CardHeader from '../../common/card-header/cardHeader';
import I18n from '../../../i18n';
import { setHStreet, setHZip, setCity } from '../../../actions/jobCreation';

const ADDRESS_STRING = I18n.t('account.address');
const CITY_STRING = I18n.t('account.city');
const ZIP_CODE_STRING = I18n.t('account.postal_code');

// Card with input fields to specify the location of the job.
class PlaceCard extends Component {

  setCity(city) {
    this.props.setCity(city);
  }
  setStreet(street) {
    this.props.setStreet(street);
  }
  setZip(zip) {
    this.props.setZip(zip);
  }

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
            <Input
              value={this.props.street}
              onChangeText={street => this.setStreet(street)}
            />
          </Item>
          <Grid>
            <Col>
              <Item floatingLabel>
                <Label>{ZIP_CODE_STRING}</Label>
                <Input
                  keyboardType="numeric"
                  value={this.props.zip}
                  onChangeText={zip => this.setZip(zip)}
                />
              </Item>
            </Col>
            <Col>
              <Item floatingLabel>
                <Label>{CITY_STRING}</Label>
                <Input
                  value={this.props.city}
                  onChangeText={city => this.setCity(city)}
                />
              </Item>
            </Col>
          </Grid>
        </Form>
        <CardItem footer />
      </Card>
    );
  }
}

PlaceCard.propTypes = {
  city: React.PropTypes.string.isRequired,
  street: React.PropTypes.string.isRequired,
  zip: React.PropTypes.string.isRequired,
  setCity: React.PropTypes.func.isRequired,
  setStreet: React.PropTypes.func.isRequired,
  setZip: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  city: state.jobCreation.city,
  street: state.jobCreation.helperAddress.street,
  zip: state.jobCreation.helperAddress.zip,
});

function bindAction(dispatch) {
  return {
    setCity: city => dispatch(setCity(city)),
    setStreet: street => dispatch(setHStreet(street)),
    setZip: zip => dispatch(setHZip(zip)),
  };
}

export default connect(mapStateToProps, bindAction)(PlaceCard);
