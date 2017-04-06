import React, { Component } from 'react';
import { Grid, Col, CardItem, Row } from 'native-base';

import TextWithStackedNote from '../../common/text-with-stacked-note/textWithStackedNote';
import GlobalStyle from '../../common/globalStyle';

// Temporary constants. These will be moved and implemented in another way in the future!
const ADDRESS_STRING = 'Adress';
const CITY_STRING = 'Stad';
const ZIP_CODE_STRING = 'Postnummer';

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
              <TextWithStackedNote text={city} note={CITY_STRING} />
            </Col>
            <Col>
              <TextWithStackedNote text={zip} note={ZIP_CODE_STRING} />
            </Col>
          </Row>
        </Grid>
      </CardItem>
    );
  }
}
