import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Form, Item, Label, Input, Card, CardItem } from 'native-base';

import CardHeader from '../../common/card-header/cardHeader';
import I18n from '../../../i18n';
import { setStreet, setZip, setCity } from '../../../actions/jobCreation';

const ADDRESS_STRING = I18n.t('account.address');
const CITY_STRING = I18n.t('account.city');
const ZIP_CODE_STRING = I18n.t('account.postal_code');

// Card with input fields to specify the location of the job.
class PlaceCard extends Component {

  render() {
    return (
      <Card>
        <CardHeader
          icon="pin" title={I18n.t('task.location')}
          subtitle={I18n.t('task.where_will_the_task_be_performed')}
        />
        <Form>
          <Item floatingLabel>
            <Label>{ADDRESS_STRING}</Label>
            <Input
              value={this.props.street}
              onChangeText={street => this.props.setStreet(street)}
            />
          </Item>
          <Grid>
            <Col>
              <Item floatingLabel>
                <Label>{ZIP_CODE_STRING}</Label>
                <Input
                  keyboardType="numeric"
                  value={this.props.zip}
                  onChangeText={zip => this.props.setZip(zip)}
                />
              </Item>
            </Col>
            <Col>
              <Item floatingLabel>
                <Label>{CITY_STRING}</Label>
                <Input
                  value={this.props.city}
                  onChangeText={city => this.props.setCity(city)}
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
  street: state.jobCreation.street,
  zip: state.jobCreation.zip,
});

function bindAction(dispatch) {
  return {
    setCity: city => dispatch(setCity(city)),
    setStreet: street => dispatch(setStreet(street)),
    setZip: zip => dispatch(setZip(zip)),
  };
}

export default connect(mapStateToProps, bindAction)(PlaceCard);
