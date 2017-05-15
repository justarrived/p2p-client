import React from 'react';
import { connect } from 'react-redux';
import { Card, CardItem } from 'native-base';
import CardHeader from '../../common/card-header/cardHeader';
import RadioWithNote from './radioWithNote';

import { setHours } from '../../../actions/jobCreation';
import I18n from '../../../i18n';

// Temporary data, should be handled differently in the future.
const radioContent = [
  { title: I18n.t('size.small.estimated_duration'),
    note: I18n.t('size.small.cost'),
    actualHours: 2 },
  { title: I18n.t('size.medium.estimated_duration'),
    note: I18n.t('size.medium.cost'),
    actualHours: 3 },
  { title: I18n.t('size.large.estimated_duration'),
    note: I18n.t('size.large.cost'),
    actualHours: 4 },
];

// Card with radio buttons to specify the duration of a job.
const TimeCard = ({ hours, setJobHours }) => {
  const radioButtons = [];
  radioContent.forEach((content) => {
    radioButtons.push(
      <RadioWithNote
        key={content.actualHours}
        title={content.title}
        note={content.note}
        selected={content.actualHours === hours}
        onPress={() => setJobHours(content.actualHours)}
      />,
      );
  });
  return (
    <Card>
      <CardHeader icon="time" title={I18n.t('date_and_time.time')} subtitle={I18n.t('task.approximate_duration')} />
      {radioButtons}
      <CardItem footer />
    </Card>
  );
};

TimeCard.propTypes = {
  hours: React.PropTypes.number.isRequired,
  setJobHours: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  hours: state.jobCreation.hours,
});

function bindAction(dispatch) {
  return {
    setJobHours: hours => dispatch(setHours(hours)),
  };
}

export default connect(mapStateToProps, bindAction)(TimeCard);
