import React from 'react';
import { Container, Content } from 'native-base';
import PreviewJobCard from '../../common/preview-job-card/previewJobCard';
import GlobalStyle from '../../../resources/globalStyle';

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
