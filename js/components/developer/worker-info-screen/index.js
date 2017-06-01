import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Container, Content, Card, Col, CardItem } from 'native-base';
import GlobalStyle from '../../../resources/globalStyle';
import I18n from '../../../i18n';
import WorkerInfoStyles from './workerInfoStyles';
import ProfileHeader from './profileHeader';
import TextWithStackedNote from '../../common/text-with-stacked-note/textWithStackedNote';

class WorkerInfoScreen extends Component {
  static propTypes = {
    userInfo: React.PropTypes.objectOf(React.PropTypes.any),
  }
  static defaultProps = {
    userInfo: null,
  }

  render() {
    const { jobUser, user } = this.props.userInfo;
    // TODO get language data
    return (
      <Container>
        <Content contentContainerStyle={GlobalStyle.padder}>
          <Card>
            <CardItem bordered>
              <ProfileHeader
                picture={{ uri: `https://api.adorable.io/avatars/140/${user.id}` }}
                name={user.attributes.first_name}
                priceTot={'500 kr'}
                priceHr={'100 kr/h'}
                rating={jobUser.rating_score}
              />
            </CardItem>
            <Col style={StyleSheet.flatten(WorkerInfoStyles.viewStyle)}>
              <CardItem bordered>
                <TextWithStackedNote
                  note={I18n.t('worker_profile.presentation')}
                  text={jobUser.attributes.apply_message}
                />
              </CardItem>
              <CardItem bordered>
                <TextWithStackedNote
                  note={I18n.t('worker_profile.language')}
                  text={'Svenska, Engelska'}
                />
              </CardItem>
              <CardItem bordered>
                <TextWithStackedNote
                  note={I18n.t('worker_profile.education')}
                  text={user.attributes.education}
                />
              </CardItem>
              <CardItem bordered>
                <TextWithStackedNote
                  note={I18n.t('worker_profile.previous_work')}
                  text={user.attributes.job_experience}
                />
              </CardItem>
            </Col>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.jobUsers.selectedUser,
});

export default connect(mapStateToProps)(WorkerInfoScreen);
