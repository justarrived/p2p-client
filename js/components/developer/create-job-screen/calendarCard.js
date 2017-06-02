import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Form, Card, CardItem } from 'native-base';
import CardHeader from '../../common/card-header/cardHeader';

import { setHStartDate, setHStartTime } from '../../../actions/jobCreation';
import I18n from '../../../i18n';
import JADatePicker from '../../common/ja-date-picker/datePicker';
import { JA_DATEPICKER_TYPE } from '../../../resources/constants';

// Card with input fields to specify when the job should be started.
class CalendarCard extends Component {
  static propTypes = {
    setDate: React.PropTypes.func.isRequired,
    setTime: React.PropTypes.func.isRequired,
    date: React.PropTypes.string.isRequired,
    time: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <Card>
        <CardHeader
          icon="calendar" title={I18n.t('date_and_time.date')}
          subtitle={I18n.t('task.when_will_the_task_be_performed')}
        />
        <Form >
          <Grid>
            <Col>
              <JADatePicker
                typeOfInput={JA_DATEPICKER_TYPE.DATE}
                onChange={this.props.setDate}
                currentPickerValue={this.props.date}
              />
            </Col>
            <Col>
              <JADatePicker
                typeOfInput={JA_DATEPICKER_TYPE.TIME}
                onChange={this.props.setTime}
                currentPickerValue={this.props.time}
              />
            </Col>
          </Grid>
        </Form>
        <CardItem footer />
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  date: state.jobCreation.helperDate.date,
  time: state.jobCreation.helperDate.time,
});

function bindAction(dispatch) {
  return {
    setDate: hours => dispatch(setHStartDate(hours)),
    setTime: time => dispatch(setHStartTime(time)),
  };
}

export default connect(mapStateToProps, bindAction)(CalendarCard);
