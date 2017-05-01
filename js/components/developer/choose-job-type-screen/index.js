import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Container, Content } from 'native-base';
import JAJobCard from './jaJobCard';
import JATagline from '../../common/ja-tagline';
import JAInput from '../../common/ja-input';
import GlobalStyle from '../../../resources/globalStyle';
import { imageProp } from '../../../resources/propTypes';
import { JA_INPUT } from '../../../resources/constants';
import { clearData, setName, setDescription, setOwner } from '../../../actions/jobCreation';
import styles from './style';

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
    <JAJobCard
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
        <Content contentContainerStyle={GlobalStyle.padder} style={{ top: 10 }}>
          <JATagline />
          <Text style={styles.serviceSelectionHeader}>
            Choose a city:
          </Text>
          <JAInput typeOfInput={JA_INPUT.CITY} />
          <Text style={styles.serviceSelectionHeader}>
            Choose a service:
          </Text>
          <View style={styles.jobCardContainer}>
            {/*{this.props.jobTypes.data.map((title, desc, icon, image) => (<JAJobCard
              title={title}
              subtitle={desc}
              cover={image}
              toNextScreen={() => {}}
            />
            ),
            )}*/}
            <JAJobCard
              title={this.props.jobTypes.data[0].title}
              cover={this.props.jobTypes.data[0].image}
              toNextScreen={() => {
                console.log("button clicked");
              }}
            />
            <JAJobCard
              title={this.props.jobTypes.data[1].title}
              cover={this.props.jobTypes.data[1].image}
              toNextScreen={() => {
                console.log("button clicked");
              }}
            />
            <JAJobCard
              title={this.props.jobTypes.data[0].title}
              cover={this.props.jobTypes.data[0].image}
              toNextScreen={() => {
                console.log("button clicked");
              }}
            />
            <JAJobCard
              title={this.props.jobTypes.data[1].title}
              cover={this.props.jobTypes.data[1].image}
              toNextScreen={() => {
                console.log("button clicked");
              }}
            />
          </View>
          { /* <List dataArray={this.props.jobTypes.data} renderRow={this.renderRow} /> */}
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
