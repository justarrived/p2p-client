import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Spinner } from 'native-base';

import PreviewJobCard from './previewJobCard';
import CardItemButton from '../../common/card-item-button/cardItemButton';
import GlobalStyle from '../../common/globalStyle';
import I18n from '../../../i18n';

import { createJsonDataAttributes } from '../../../networking/json';
import { requestPostJob } from '../../../actions/jobs';

// Screen shown during job creation, with a preview of the job.
class JobPreviewScreen extends Component {

  static navigationOptions = {
    title: I18n.t('screen_titles.job_preview'),
  };

  static propTypes = {
    jobPreview: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
    token: React.PropTypes.string.isRequired,
    createJob: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool.isRequired,
    jobError: React.PropTypes.objectOf(React.PropTypes.any),
  };
  static defaultProps = {
    jobError: null,
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.loading && !nextProps.loading && nextProps.jobError === null) {
      // Successfully created a job. Navigate!
      // TODO reset 'create job' navigation stack
      this.props.navigation.navigate('MyJobsScreen');
    }
  }

  postJob() {
    // jobPreview same as required attributes
    const data = this.props.jobPreview;
    const jobJson = createJsonDataAttributes(data);
    this.props.createJob(jobJson, this.props.token);
  }

  previewFooter() {
    return [
      <CardItemButton
        key={1}
        text={I18n.t('job.create_job_button')}
        onPress={() => this.postJob()}
      />];
  }

  render() {
    if (this.props.loading) {
      return <Spinner color="blue" />;
    }
    if (this.props.jobError != null) {
      // TODO Implement proper error handling
      // console.warn(JSON.stringify(this.props.jobError));
    }
    return (
      <Container>
        <Content contentContainerStyle={GlobalStyle.padder}>
          <PreviewJobCard
            jobJson={this.props.jobPreview}
            footerNode={this.previewFooter()}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  token: state.session.token,
  jobPreview: state.jobCreation,
  loading: state.jobs.jobLoading,
  jobError: state.jobs.error,
});

function bindAction(dispatch) {
  return {
    createJob: (jobJson, token) => dispatch(requestPostJob(jobJson, token)),
  };
}

export default connect(mapStateToProps, bindAction)(JobPreviewScreen);
