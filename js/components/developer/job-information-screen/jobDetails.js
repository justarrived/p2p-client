import React from 'react';
import { Container, Content } from 'native-base';

import PreviewJobCard from '../../common/preview-job-card/previewJobCard';
import GlobalStyle from '../../common/globalStyle';

// TODO Display real data
const PLACEHOLDER = {
  hours: 2,
  name: 'placeholder name',
  description: 'placeholder description',
  city: 'Göteborg',
  street: 'Stampgatan 28',
  zip: '40126',
  helperDate: {
    date: '2017-10-20',
    time: '13:37',
  },
};

// Screen shown during job creation, with a preview of the job.
const jobDetails = ({ jobJson }) =>
  <Container>
    <Content contentContainerStyle={GlobalStyle.padder}>
      <PreviewJobCard
        jobJson={jobJson.attributes}
      />
    </Content>
  </Container>;

jobDetails.propTypes = {
  jobJson: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
};

export default jobDetails;
