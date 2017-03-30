import React, { Component } from 'react';
import {} from 'react-native';
import { Form, Content } from 'native-base';
import I18n from '../../../../I18n/components/developer/sample-screen/I18n';
import WorkerCard from './workerCard';
import WorkerScreenStyle from './chooseWorkerStyles';

export default class ChooseWorkerScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screenTitle'),
  };

  render() {
    return (
      <Content>
        <Form>
          <WorkerCard />
          <WorkerCard />
          <WorkerCard />
          <WorkerCard />
          <WorkerCard />
          <WorkerCard />
          <WorkerCard />
          <WorkerCard />
          <WorkerCard />
          <WorkerCard />
          <WorkerCard />
          <WorkerCard />
          <WorkerCard />
          <WorkerCard />
          <WorkerCard />
        </Form>
      </Content>
    );
  }
}
