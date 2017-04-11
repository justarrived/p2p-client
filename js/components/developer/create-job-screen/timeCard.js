import React, { Component } from 'react';
import { Card, CardItem } from 'native-base';
import CardHeader from '../../common/card-header/cardHeader';
import RadioWithNote from './radioWithNote';
import I18n from '../../../i18n';

// Temporary data, will be moved and handled in another way in the future.
const radioContent = [
  { title: I18n.t('size.small.estimated_duration'),
    note: I18n.t('size.small.cost'),
    key: 'SMALL' },
  { title: I18n.t('size.medium.estimated_duration'),
    note: I18n.t('size.medium.cost'),
    key: 'MEDIUM' },
  { title: I18n.t('size.large.estimated_duration'),
    note: I18n.t('size.large.cost'),
    key: 'BIG' },
];

// Card with radio buttons to specify the duration of a job.
export default class TimeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  selectRadio = (index) => {
    this.setState({
      selected: index,
    });
  }

  render() {
    const radioButtons = [];
    radioContent.forEach((content, i) => {
      radioButtons.push(
        <RadioWithNote
          key={content.key} title={content.title} note={content.note}
          selected={this.state.selected === i} onPress={() => this.selectRadio(i)}
        />,
      );
    });

    return (
      <Card>
        <CardHeader icon="time" title={I18n.t('date_and_time.time')} subtitle={I18n.t('job.how_long_will_the_job_take')} />
        {radioButtons}
        <CardItem footer />
      </Card>
    );
  }
}
