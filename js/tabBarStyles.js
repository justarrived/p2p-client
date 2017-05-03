import { StyleSheet } from 'react-native';
import { PRIMARY_THEME_COLOR, WHITE, GRAY } from './resources/colors';

const ACTIVE_TINT_COLOR = PRIMARY_THEME_COLOR;
const INACTIVE_TINT_COLOR = GRAY;

const TabBarStyles = StyleSheet.create({
  label: {
    fontSize: 10,
  },
  tabBar: {
    backgroundColor: WHITE,
  },
  indicator: {
    backgroundColor: PRIMARY_THEME_COLOR,
  },
});

module.exports = { TabBarStyles, ACTIVE_TINT_COLOR, INACTIVE_TINT_COLOR };
