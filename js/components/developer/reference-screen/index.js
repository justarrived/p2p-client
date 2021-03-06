import React, { Component } from 'react';
import { Container, Content, List } from 'native-base';
import moment from 'moment';
import ReferenceListItem from './referenceListItem';
import I18n from '../../../i18n';

// Temporary data. Will be handled in another way in the future.
const REFERENCES = [
  { reference: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor', author: 'Anna', date: '2017-05-08', rating: '4' },
  { reference: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor', author: 'Eva', date: '2017-05-01', rating: '5' },
  { reference: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor', author: 'Johan', date: '2017-02-08', rating: '2' },
  { reference: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor', author: 'John', date: '2015-07-13', rating: '3' },
];

export default class ReferenceScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screen_titles.reference'),
  };

  renderRow = reference =>
    <ReferenceListItem
      reference={reference.reference}
      author={reference.author}
      icon={{ uri: `https://api.adorable.io/avatars/80/${reference.author}` }}
      date={moment(reference.date).fromNow(true)}
      rating={reference.rating}
    />

  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={REFERENCES} renderRow={this.renderRow}
            removeClippedSubviews={false}
          />
        </Content>
      </Container>
    );
  }
}
