import React, { Component } from 'react';
import { Form, Content, List } from 'native-base';
import { connect } from 'react-redux';
import { navigate } from '../../../actions/navigation';
import WorkerListItem from './workerListItem';
import JASpinner from '../../common/ja-spinner/JASpinner';
import { requestGetJobUsers, selectJobUser } from '../../../actions/jobUsers';
import I18n from '../../../i18n';

class ChooseWorkerScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screen_titles.choose_worker'),
  };

  static propTypes = {
    navigate: React.PropTypes.func.isRequired,
    selectJobUser: React.PropTypes.func.isRequired,
    initialized: React.PropTypes.bool.isRequired,
    loading: React.PropTypes.bool.isRequired,
    jobId: React.PropTypes.string.isRequired,
    token: React.PropTypes.string.isRequired,
    getJobUsers: React.PropTypes.func.isRequired,
    jobUserError: React.PropTypes.objectOf(React.PropTypes.any),
    jobUsers: React.PropTypes.arrayOf(React.PropTypes.any),
    users: React.PropTypes.arrayOf(React.PropTypes.any),
  }
  static defaultProps = {
    jobUserError: null,
    jobUsers: [],
    users: [],
  }

  componentDidMount() {
    this.props.getJobUsers(this.props.jobId, this.props.token);
  }

  getUser(jobUser) {
    const foundUser = this.props.users.find(user => user.id === jobUser.relationships.user.data.id);
    return foundUser !== undefined ? foundUser : { id: null, attributes: { first_name: 'missing' } };
  }

  renderRow = (jobUser, user) =>
    <WorkerListItem
      author={`${user.attributes.first_name}`}
      rating={jobUser.rating_score}
      price={'350 kr'}
      icon={{ uri: `https://api.adorable.io/avatars/80/${user.id}` }}
      goToWorkerProfile={() => {
        this.props.selectJobUser({ jobUser, user });
        this.props.navigate('WorkerProfileScreen');
      }}
    />;

  render() {
    if (this.props.jobUserError != null) {
      // TODO handle errors
    }
    if (this.props.loading || !this.props.initialized) {
      return <JASpinner />;
    }
    return (
      <Content>
        <Form>
          <List
            dataArray={this.props.jobUsers}
            renderRow={jobUser => this.renderRow(jobUser, this.getUser(jobUser))}
          />
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
  jobUsers: state.jobUsers.jobUsers,
  users: state.jobUsers.users,
  jobUserError: state.jobUsers.error,
  navigation: state.navigation,
});

function bindAction(dispatch) {
  return {
    navigate: (routeName, params) => dispatch(navigate(routeName, params)),
    getJobUsers: (jobId, token) => dispatch(requestGetJobUsers(jobId, token)),
    selectJobUser: user => dispatch(selectJobUser(user)),
  };
}

export default connect(mapStateToProps, bindAction)(ChooseWorkerScreen);
