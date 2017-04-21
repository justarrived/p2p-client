import React, { Component } from 'react';
import { Container, Content, Card } from 'native-base';
import GlobalStyle from '../../common/globalStyle';
import I18n from '../../../i18n';
import PreviousWork from './prevWork';
import Education from './education';
import Languages from './language';
import Presentation from './presentation';
import ProfileHeader from './profileHeader';

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
            <ProfileHeader
              picture={{
                uri: 'https://facebook.github.io/react/img/logo_og.png',
              }}
              name={'John Doe'}
              priceTot={'500'}
              priceHr={'100'}
              rating={'4'}
            />
            <Presentation
              title={I18n.t('worker_profile.presentation')}
              presentation={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed ligula euismod, vestibulum turpis eu, viverra risus.'}
            />
            <Languages
              title={I18n.t('worker_profile.language')}
              language={'Svenska, Engelska'}
            />
            <Education
              title={I18n.t('worker_profile.education')}
              education={'Nationalekonomi'}
            />
            <PreviousWork
              title={I18n.t('worker_profile.prev_work')}
              prevWork={'Banktjänsteman'}
            />
          </Card>
        </Content>
      </Container>
    );
  }
}
