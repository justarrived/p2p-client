import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content, Thumbnail, Card, CardItem, Text, Grid, Icon, Col, Row } from 'native-base';
import GlobalStyle from '../../common/globalStyle';
import WorkerProfileStyles from './workerProfileStyles';
import I18n from '../../../i18n';
import PreviousWork from './prevWork';
import Education from './education';
import Languages from './language';
import Presentation from './presentation';
import ProfileHeader from './profileHeader';


const LOGO_URL = 'https://facebook.github.io/react/img/logo_og.png';
const NAME = 'John Doe';
const PRICETOT = '500';
const PRICEHR = '100';
const RATING = '4';
const PRESENTATION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed ligula euismod, vestibulum turpis eu, viverra risus.';
const LANGUAGES = 'Svenska, Engelska';
const EDUCATION = 'Nationalekonomi';
const PREVWORK = 'Banktjänsteman';

export default class WorkerInfoScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screen_titles.worker_profile', { name: NAME }),
  };
  render() {
    return (
      <Container>
        <Content contentContainerStyle={GlobalStyle.padder}>
          <Card>
            <ProfileHeader
              picture={{
                uri: 'https://facebook.github.io/react/img/logo_og.png',
              }}
              name={NAME}
              priceTot={PRICETOT}
              priceHr={PRICEHR}
              rating={RATING}
            />
            <Presentation
              title={I18n.t('worker_profile.presentation')}
              presentation={PRESENTATION}
            />
            <Languages
              title={I18n.t('worker_profile.language')}
              language={LANGUAGES}
            />
            <Education
              title={I18n.t('worker_profile.education')}
              education={EDUCATION}
            />
            <PreviousWork
              title={I18n.t('worker_profile.prev_work')}
              prevWork={PREVWORK}
            />
          </Card>
        </Content>
      </Container>
    );
  }
}
