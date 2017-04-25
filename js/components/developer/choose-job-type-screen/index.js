import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Container, Content, List } from 'native-base';
import JobTypeCard from './jobTypeCard';
import GlobalStyle from '../../common/globalStyle';
import { imageProp } from '../../common/propTypes';
import { clearData, setName, setDescription, setOwner } from '../../../actions/jobCreation';
import I18n from '../../../i18n';

const { shape, arrayOf, string, func, number } = PropTypes;

class ChooseJobTypeScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screen_titles.choose_job_type'),
  };

  static propTypes = {
    jobTypes: shape({
      data: arrayOf(
        shape({
          title: string.isRequired,
          description: string.isRequired,
          icon: imageProp.isRequired,
          image: imageProp.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
    userId: number.isRequired,
    initiateCreateJob: func.isRequired,
  };

  navigateToNextScreen = () => this.props.navigation.navigate('CreateJobScreen');

  renderRow = jobType => (
    <JobTypeCard
      title={jobType.title} subtitle={jobType.description}
      cover={jobType.image} icon={jobType.icon}
      toNextScreen={() => {
        this.props.initiateCreateJob(jobType.title, jobType.description, this.props.userId);
        this.navigateToNextScreen();
      }}
    />
  );

  render() {
    return (
      <Container>
        <Content contentContainerStyle={GlobalStyle.padder}>
          <List dataArray={this.props.jobTypes.data} renderRow={this.renderRow} />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  jobTypes: state.jobTypes,
  userId: state.session.userId,
});

function bindAction(dispatch) {
  return {
    initiateCreateJob: (name, description, userId) => {
      dispatch(clearData());
      dispatch(setName(name));
      dispatch(setDescription(description));
      dispatch(setOwner(userId));
    },
  };
}

export default connect(mapStateToProps, bindAction)(ChooseJobTypeScreen);
