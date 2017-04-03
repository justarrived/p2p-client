import React, { Component, PropTypes } from 'react';
import { Container, Content, List } from 'native-base';
import { connect } from 'react-redux';
import JobTypeCard from './jobTypeCard';
import GlobalStyle from '../../common/globalStyle';
import { imageProp } from '../../common/propTypes';

const { shape, arrayOf, string } = PropTypes;

class ChooseJobTypeScreen extends Component {
  static navigationOptions = {
    title: 'Choose Job Type',
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
  };

  navigateToNextScreen = () => this.props.navigation.navigate('CreateJobScreen');

  renderRow = jobType => (
    <JobTypeCard
      title={jobType.title} subtitle={jobType.description}
      cover={jobType.image} icon={jobType.icon}
      toNextScreen={() => this.navigateToNextScreen()}
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

const mapStateToProps = state => ({ jobTypes: state.jobTypes });

export default connect(mapStateToProps)(ChooseJobTypeScreen);
