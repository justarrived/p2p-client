import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Container, Content, List } from 'native-base';
import JobTypeCard from './jobTypeCard';
import JATagline from '../../common/ja-tagline';
import GlobalStyle from '../../../resources/globalStyle';
import { imageProp } from '../../../resources/propTypes';
import { clearData, setName, setDescription, setOwner } from '../../../actions/jobCreation';


const { shape, arrayOf, string, func, number } = PropTypes;

class ChooseJobTypeScreen extends Component {
  static navigationOptions = {
    header: null,
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
          <JATagline />
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
