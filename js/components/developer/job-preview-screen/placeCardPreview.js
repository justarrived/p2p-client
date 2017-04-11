import React, { Component } from 'react';
import { Grid, Col, CardItem, Row } from 'native-base';

import TextWithStackedNote from '../../common/text-with-stacked-note/textWithStackedNote';
import GlobalStyle from '../../common/globalStyle';
import I18n from '../../../i18n';

// Temporary constants. These will be moved and implemented in another way in the future!
const ADDRESS_STRING = I18n.t('account.address');
const CITY_STRING = I18n.t('account.city');
const ZIP_CODE_STRING = I18n.t('account.postal_code');

// Card showing the location of the job, in the job creation preview.
export default class PlaceCardPreview extends Component {
  static propTypes = {
    data: React.PropTypes.shape({
      address: React.PropTypes.string,
      city: React.PropTypes.string,
      zip: React.PropTypes.string,
    }).isRequired,
  };

  render() {
    const { address, city, zip } = this.props.data;
    return (
      <CardItem bordered>
        <Grid>
          <Row>
            <TextWithStackedNote text={address} note={ADDRESS_STRING} />
          </Row>
          <Row style={GlobalStyle.rowMargin}>
            <Col>
              <TextWithStackedNote text={zip} note={ZIP_CODE_STRING} />
            </Col>
            <Col>
              <TextWithStackedNote text={city} note={CITY_STRING} />
            </Col>
          </Row>
        </Grid>
      </CardItem>
    );
  }
}
