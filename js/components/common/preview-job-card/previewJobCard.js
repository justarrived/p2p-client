import React from 'react';
import { Card } from 'native-base';

import PreviewHeaderView from './previewHeaderView';
import PreviewDurationAndCostCardItem from './previewDurationAndCostCardItem';
import PreviewLocationCardItem from './previewLocationCardItem';
import PreviewDateCardItem from './previewDateCardItem';
import I18n from '../../../i18n';

// Temporary constants. These will be moved and implemented in another way in the future!
const EXAMPLE_IMAGE_URL = 'https://facebook.github.io/react/img/logo_og.png';

// Preview screen displaying information about a job
// footerNode can be any react elements, for example a button.
const PreviewJobCard = ({ jobJson, duration, cost, footerNode }) =>
  <Card>
    <PreviewHeaderView
      title={jobJson.name}
      subtitle={jobJson.description}
      cover={{ uri: EXAMPLE_IMAGE_URL }}
      icon={{ uri: EXAMPLE_IMAGE_URL }}
    />
    <PreviewDurationAndCostCardItem
      duration={duration}
      cost={cost}
    />
    <PreviewDateCardItem
      date={jobJson.helperDate.date}
      time={jobJson.helperDate.time}
    />
    <PreviewLocationCardItem
      street={jobJson.street}
      zip={jobJson.zip}
      city={jobJson.city}
    />
    {footerNode}
  </Card>;

PreviewJobCard.propTypes = {
  jobJson: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  duration: React.PropTypes.string,
  cost: React.PropTypes.string,
  footerNode: React.PropTypes.node,
};

// TODO revamp how job duration is handled
PreviewJobCard.defaultProps = {
  duration: I18n.t('size.small.estimated_duration'),
  cost: I18n.t('size.small.cost'),
  footerNode: null,
};

export default PreviewJobCard;
