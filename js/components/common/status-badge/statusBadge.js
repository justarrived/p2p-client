import React, { Component } from 'react';
import Badge from '../badge/badge';
import { JOB_STATUS } from '../../common/constants';
import {
  BADGE_COLOR_ACTIVE,
  BADGE_COLOR_UNASSIGNED,
  BADGE_COLOR_DEFAULT,
} from '../../common/colors';

// Uses information about the status of a job to return a Badge with a suitable background
export default class StatusBadge extends Component {
  static propTypes = {
    status: React.PropTypes.oneOf(Object.values(JOB_STATUS)).isRequired,
  }

  // Returns a background color depending on the job status
  getBadgeColorFromStatus = (status) => {
    switch (status) {
      case JOB_STATUS.ACTIVE:
        return BADGE_COLOR_ACTIVE;
      case JOB_STATUS.UNASSIGNED:
        return BADGE_COLOR_UNASSIGNED;
      default:
        return BADGE_COLOR_DEFAULT;
    }
  };

  render() {
    return (
      <Badge text={this.props.status} color={this.getBadgeColorFromStatus(this.props.status)} />
    );
  }
}
