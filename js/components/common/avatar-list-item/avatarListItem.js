import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Left, Right, ListItem, Body, Thumbnail } from 'native-base';
import AvatarListItemStyles from './avatarListItemStyles';
import StatusBadge from '../status-badge/statusBadge';
import { JOB_STATUS } from '../../common/constants';
import I18n from '../../../i18n';

export default class AvatarListItem extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    note: React.PropTypes.string.isRequired,
    status: React.PropTypes.oneOf(Object.values(JOB_STATUS)),
    icon: React.PropTypes.oneOfType([
      React.PropTypes.number.isRequired,
      React.PropTypes.shape({
        uri: React.PropTypes.string.isRequired,
      }),
    ]).isRequired,
    toNextScreen: React.PropTypes.func,
  }

  static defaultProps = {
    status: undefined,
    toNextScreen: () => alert('Hej!'),
  }

  render() {
    const { title, note, status, icon } = this.props;
    let badgeIfProvided = [];
    if (status !== undefined) {
      badgeIfProvided = (
        <Right>
          <StatusBadge status={status} />
        </Right>
      );
    }

    return (
      <ListItem avatar onPress={this.props.toNextScreen}>
        <Left>
          <Thumbnail
            style={StyleSheet.flatten(AvatarListItemStyles.logo)}
            source={icon}
          />
        </Left>
        <Body>
          <Text>{title}</Text>
          <Text note>{note}</Text>
        </Body>
        {badgeIfProvided}
      </ListItem>
    );
  }
}
