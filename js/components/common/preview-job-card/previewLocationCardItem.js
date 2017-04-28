import React from 'react';
import { Grid, Col, CardItem, Row } from 'native-base';

import TextWithStackedNote from '../../common/text-with-stacked-note/textWithStackedNote';
import GlobalStyle from '../../common/globalStyle';
import I18n from '../../../i18n';

const ADDRESS_STRING = I18n.t('account.address');
const CITY_STRING = I18n.t('account.city');
const ZIP_CODE_STRING = I18n.t('account.postal_code');

// Card showing the location of the job, in the job creation preview.
const PreviewLocationCardItem = ({ street, zip, city }) =>
  <CardItem bordered>
    <Grid>
      <Row>
        <TextWithStackedNote
          note={ADDRESS_STRING}
          text={street}
        />
      </Row>
      <Row style={GlobalStyle.rowMargin}>
        <Col>
          <TextWithStackedNote
            note={ZIP_CODE_STRING}
            text={zip}
          />
        </Col>
        <Col>
          <TextWithStackedNote
            note={CITY_STRING}
            text={city}
          />
        </Col>
      </Row>
    </Grid>
  </CardItem>;

PreviewLocationCardItem.propTypes = {
  street: React.PropTypes.string,
  city: React.PropTypes.string,
  zip: React.PropTypes.string,
};

PreviewLocationCardItem.defaultProps = {
  street: 'missing',
  city: 'missing',
  zip: 'missing',
};

export default PreviewLocationCardItem;
