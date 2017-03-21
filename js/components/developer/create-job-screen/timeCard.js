import React, { Component } from 'react';
import { Card, CardItem } from 'native-base';
import CardHeader from '../common/cardHeader';
import RadioWithNote from './radioWithNote';

// Temporary data, will be moved and handled in another way in the future.
const radioContent = [
  { title: 'Litet, 1-2 timmar', note: '(150 - 300 kr)', key: 'SMALL' },
  { title: 'Medel, 2-3 timmar', note: '(300 - 450 SEK)', key: 'MEDIUM' },
  { title: 'Stort, 3+ timmar', note: '(450+ SEK)', key: 'BIG' },
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
        <CardHeader icon="time" title="Tidsåtgång" subtitle="Hur lång tid tar uppdraget?" />
        {radioButtons}
        <CardItem footer />
      </Card>
    );
  }
}
