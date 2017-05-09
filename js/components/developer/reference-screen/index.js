import React, { Component } from 'react';
import { Container, Content, List } from 'native-base';
import ReferenceListItem from './referenceListItem';
import I18n from '../../../i18n';

// Temporary data. Will be handled in another way in the future.
const ICON = { uri: 'https://facebook.github.io/react/img/logo_og.png' };
const REFERENCES = [
  { reference: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor', author: 'Anna', icon: ICON, date: '2017-04-10', rating: '4' },
  { reference: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor', author: 'Eva', icon: ICON, date: '2017-04-12', rating: '5' },
  { reference: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor', author: 'Johan', icon: ICON, date: '2017-04-14', rating: '2' },
  { reference: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor', author: 'John', icon: ICON, date: '2017-04-13', rating: '3' },
];

export default class ReferenceScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screen_titles.reference'),
  };

  renderRow = reference =>
    <ReferenceListItem
      reference={reference.reference}
      author={reference.author}
      icon={reference.icon}
      date={reference.date}
      rating={reference.rating}
    />

  render() {
    return (
      <Container>
        <Content>
          <List dataArray={REFERENCES} renderRow={this.renderRow} />
        </Content>
      </Container>
    );
  }
}
