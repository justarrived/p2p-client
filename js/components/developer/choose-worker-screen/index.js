import React, { Component } from 'react';
import { Form, Content, List } from 'native-base';
import { connect } from 'react-redux';
import { navigate } from '../../../actions/navigation';
import WorkerListItem from './workerListItem';
import JASpinner from '../../common/ja-spinner/JASpinner';
import { requestGetJobUsers } from '../../../actions/jobUsers';
import I18n from '../../../i18n';

// Temporary data. Will be handled in another way in the future.
const REFERENCES = [
  { author: 'Jake Weary', price: '500 kr' },
  { author: 'Samuel Serif', rating: '3', price: '350 kr' },
  { author: 'Ruby von Rails', rating: '2', price: '150 kr' },
];

class ChooseWorkerScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screen_titles.choose_worker'),
  };

  static propTypes = {
    navigate: React.PropTypes.func.isRequired,
    initialized: React.PropTypes.bool.isRequired,
    loading: React.PropTypes.bool.isRequired,
    jobId: React.PropTypes.string.isRequired,
    token: React.PropTypes.string.isRequired,
    getJobUsers: React.PropTypes.func.isRequired,
    jobUserError: React.PropTypes.objectOf(React.PropTypes.any),
    jobUsers: React.PropTypes.objectOf(React.PropTypes.any),
  }
  static defaultProps = {
    jobUserError: null,
    jobUsers: [],
  }

  componentDidMount() {
    this.props.getJobUsers(this.props.jobId, this.props.token);
  }

  // TODO Navigate to WorkerProfileScreen and display correct information for the selected worker
  renderRow = reference =>
    <WorkerListItem
      author={reference.author} rating={reference.rating}
      price={reference.price} icon={{ uri: `https://api.adorable.io/avatars/80/${reference.author}` }}
      goToWorkerProfile={() => this.props.navigate('WorkerProfileScreen')}
    />

  render() {
    if (this.props.jobUserError != null) {
      // TODO handle errors
    }
    if (this.props.loading || !this.props.initialized) {
      return <JASpinner />;
    }
    // TODO remove console.log(this.props.jobUsers);
    return (
      <Content>
        <Form>
          <List dataArray={REFERENCES} renderRow={this.renderRow} />
        </Form>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  jobId: state.ownedJobs.selectedJob.id,
  token: state.session.token,
  initialized: state.ownedJobs.selectInitialized,
  loading: state.jobUsers.loading,
  jobUsers: state.jobUsers.jobUserJson,
  jobUserError: state.jobUsers.error,
  navigation: state.navigation,
});

function bindAction(dispatch) {
  return {
    navigate: (routeName, params) => dispatch(navigate(routeName, params)),
    getJobUsers: (jobId, token) => dispatch(requestGetJobUsers(jobId, token)),
  };
}

export default connect(mapStateToProps, bindAction)(ChooseWorkerScreen);
