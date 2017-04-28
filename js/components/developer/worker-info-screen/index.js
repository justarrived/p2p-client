import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Card, Col, CardItem } from 'native-base';
import GlobalStyle from '../../../resources/globalStyle';
import I18n from '../../../i18n';
import WorkerInfoStyles from './workerInfoStyles';
import ProfileHeader from './profileHeader';
import TextWithStackedNote from '../../common/text-with-stacked-note/textWithStackedNote';

// @TODO Replace temporary data with data from Redux/API
const NAME = 'John Doe';

export default class WorkerInfoScreen extends Component {

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
                name={NAME}
                priceTot={'500 kr'}
                priceHr={'100 kr/h'}
                rating={'4'}
              />
            </CardItem>
            <Col style={StyleSheet.flatten(WorkerInfoStyles.viewStyle)}>
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
