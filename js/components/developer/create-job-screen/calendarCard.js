import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Form, Item, Label, Input, Card, CardItem } from 'native-base';
import CardHeader from '../../common/card-header/cardHeader';

import { setHStartDate, setHStartTime } from '../../../actions/jobCreation';
import I18n from '../../../i18n';

// Card with input fields to specify when the job should be started.
class CalendarCard extends Component {
  static propTypes = {
    setDate: React.PropTypes.func.isRequired,
    setTime: React.PropTypes.func.isRequired,
    date: React.PropTypes.string.isRequired,
    time: React.PropTypes.string.isRequired,
  };

  // TODO check date and time format!
  // format= 2016-02-18T01:01:01.000+01:00"

  render() {
    return (
      <Card>
        <CardHeader
          icon="calendar" title={I18n.t('date_and_time.date')}
          subtitle={I18n.t('job.when_will_the_task_be_performed')}
        />
        <Form >
          <Grid>
            <Col>
              <Item floatingLabel>
                <Label>{I18n.t('date_and_time.date')}</Label>
                <Input
                  keyboardType="numeric"
                  maxLength={10}
                  value={this.props.date}
                  onChangeText={date => this.props.setDate(date)}
                />
              </Item>
            </Col>
            <Col>
              <Item floatingLabel>
                <Label>{I18n.t('date_and_time.time')}</Label>
                <Input
                  keyboardType="numeric"
                  maxLength={5}
                  value={this.props.time}
                  onChangeText={time => this.props.setTime(time)}
                />
              </Item>
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
