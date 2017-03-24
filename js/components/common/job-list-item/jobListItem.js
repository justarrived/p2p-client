import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Text, Left, Right, ListItem, Body, Thumbnail } from 'native-base';
import JobListItemStyles from './jobListItemStyles';
import StatusBadge from '../status-badge/statusBadge';
import { JOB_STATUS } from '../../common/constants';

const LOGO_URL = 'https://facebook.github.io/react/img/logo_og.png';

export default class JobListItem extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
    status: React.PropTypes.oneOf(Object.values(JOB_STATUS)).isRequired,
  }

  render() {
    const { title, date, status } = this.props;

    return (
      <ListItem avatar onPress={() => this.props.navigation('JobPreviewScreen')}>
        <Left>
          <Thumbnail
            style={StyleSheet.flatten(JobListItemStyles.logo)}
            source={{ uri: LOGO_URL }}
          />
        </Left>
        <Body>
          <Text>{title}</Text>
          <Text note>{date}</Text>
        </Body>
        <Right>
          <StatusBadge status={status} />
        </Right>
      </ListItem>
    );
  }

}
