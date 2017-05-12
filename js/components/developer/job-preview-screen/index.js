import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content } from 'native-base';
import JASpinner from '../../common/ja-spinner/JASpinner';

import PreviewJobCard from '../../common/preview-job-card/previewJobCard';
import CardItemButton from '../../common/card-item-button/cardItemButton';
import GlobalStyle from '../../../resources/globalStyle';
import I18n from '../../../i18n';

import { createJsonDataAttributes } from '../../../networking/json';
import { requestPostJob } from '../../../actions/jobs';

// Screen shown during job creation, with a preview of the job.
class JobPreviewScreen extends Component {

  static navigationOptions = {
    title: I18n.t('screen_titles.task_preview'),
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

  getPreviewFooter() {
    return (
      <CardItemButton
        text={I18n.t('job.order_task_button')}
        onPress={() => this.postJob()}
      />
    );
  }

  postJob() {
    // jobPreview same as required attributes
    const data = this.props.jobPreview;
    const jobJson = createJsonDataAttributes(data);
    this.props.createJob(jobJson, this.props.token);
  }

  render() {
    if (this.props.loading) {
      return <JASpinner />;
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
            footerNode={this.getPreviewFooter()}
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
