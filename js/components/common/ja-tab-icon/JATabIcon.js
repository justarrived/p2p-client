import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';
import { JATabIconStyle, TAB_ICON_SIZE } from './JATabIconStyle';

/**
  Tab icon used in TabNavigator tabs from React Navigation.
  Displays a badge if the count prop is of greater value than zero.

  https://reactnavigation.org/docs/navigators/tab
**/
export default function JATabIcon({ name, size = TAB_ICON_SIZE, tintColor, count = 0 }) {
  return (
    <View>
      <Icon name={name} style={{ fontSize: size, color: tintColor }} />
      { count > 0 &&
        <View elevation={1} style={JATabIconStyle.badge}>
          <Text elevation={1} style={JATabIconStyle.badgeText}>{count}</Text>
        </View>
      }
    </View>
  );
}

JATabIcon.propTypes = {
  name: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  tintColor: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
