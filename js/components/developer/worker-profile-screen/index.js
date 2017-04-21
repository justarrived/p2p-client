import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content, Card, Col, CardItem } from 'native-base';
import GlobalStyle from '../../common/globalStyle';
import I18n from '../../../i18n';
import WorkerProfileStyles from './workerProfileStyles';
import ProfileHeader from './profileHeader';
import TextWithStackedNote from '../../common/text-with-stacked-note/textWithStackedNote';

const NAME = 'John Doe';

export default class WorkerInfoScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screen_titles.worker_profile', { name: NAME }),
  };
  render() {
    return (
      <Container>
        <Content contentContainerStyle={GlobalStyle.padder}>
          <Card>
            <CardItem bordered>
              <ProfileHeader
                picture={{
                  uri: 'https://facebook.github.io/react/img/logo_og.png',
                }}
                name={'John Doe'}
                priceTot={'500 kr'}
                priceHr={'100 kr/h'}
                rating={'4'}
              />
            </CardItem>
            <Col style={StyleSheet.flatten(WorkerProfileStyles.viewStyle)}>
              <CardItem bordered>
                <TextWithStackedNote
                  note={I18n.t('worker_profile.presentation')}
                  text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed ligula euismod, vestibulum turpis eu, viverra risus.'}
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
                  text={'Nationalekonomi'}
                />
              </CardItem>
              <CardItem bordered>
                <TextWithStackedNote
                  note={I18n.t('worker_profile.prev_work')}
                  text={'Banktjänsteman'}
                />
              </CardItem>
            </Col>
          </Card>
        </Content>
      </Container>
    );
  }
}
