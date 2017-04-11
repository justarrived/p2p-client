import React, { Component } from 'react';
import { Form, Content, List } from 'native-base';
import ReferenceListItem from './referenceListItem';

// Temporary data. Will be handled in another way in the future.
const ICON = { uri: 'https://facebook.github.io/react/img/logo_og.png' };
const REFERENCES = [
  { reference: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor', author: 'Anna', icon: ICON, date: '2017-04-10', rating: '4' },
  { reference: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor', author: 'Eva', icon: ICON, date: '2017-04-12', rating: '5' },
  { reference: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor', author: 'Johan', icon: ICON, date: '2017-04-14', rating: '2' },
  { reference: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor', author: 'John', icon: ICON, date: '2017-04-13', rating: '3' },
];

export default class ReferenceScreen extends Component {
  static navigationOptions = {
    title: 'Reference List',
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
      <Content>
        <Form>
          <List dataArray={REFERENCES} renderRow={this.renderRow} />
        </Form>
      </Content>
    );
  }
}
