import React, { Component } from 'react';
import { Card, CardItem } from 'native-base';
import CardHeader from './cardHeader';
import RadioWithNote from './radioWithNote';

// Temporary constants. These will be moved and implemented in another way in the future!
const SMALL_JOB_DESC = 'Litet, 1-2 timmar';
const MEDIUM_JOB_DESC = 'Medel, 2-3 timmar';
const BIG_JOB_DESC = 'Stort, 3+ timmar';
const SMALL_JOB_COST = '(150 - 300 kr)';
const MEDIUM_JOB_COST = '(300 - 450 SEK)';
const BIG_JOB_COST = '(450+ SEK)';

// Card with radio buttons to specify the duration of a job.
export default class TimeCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader icon="time" title="Tid" subtitle="Hur lång tid tar uppdraget?" />
        <RadioWithNote selected title={SMALL_JOB_DESC} note={SMALL_JOB_COST} />
        <RadioWithNote selected={false} title={MEDIUM_JOB_DESC} note={MEDIUM_JOB_COST} />
        <RadioWithNote selected={false} title={BIG_JOB_DESC} note={BIG_JOB_COST} />
        <CardItem footer />
      </Card>
    );
  }
}
