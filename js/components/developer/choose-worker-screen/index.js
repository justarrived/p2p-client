import React, { Component } from 'react';
import { Form, Content, List } from 'native-base';
import WorkerListItem from './workerListItem';
import I18n from '../../../i18n';

// Temporary data. Will be handled in another way in the future.
const ICON = { uri: 'https://facebook.github.io/react/img/logo_og.png' };
const REFERENCES = [
  { author: 'John Doe', price: '500 kr', icon: ICON },
  { author: 'Jhon Doe', rating: '3', price: '350 kr', icon: ICON },
  { author: 'John Deo', rating: '2', price: '150 kr', icon: ICON },
];

export default class ChooseWorkerScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screen_titles.choose_worker'),
  };

  renderRow = reference =>
    <WorkerListItem
      author={reference.author} rating={reference.rating}
      price={reference.price} icon={reference.icon}
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
