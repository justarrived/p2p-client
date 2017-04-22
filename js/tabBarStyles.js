import { StyleSheet } from 'react-native';
import { PRIMARY_THEME_COLOR, WHITE } from './components/common/colors';

const TabBarStyles = StyleSheet.create({
  label: {
    color: PRIMARY_THEME_COLOR,
    fontSize: 10,
    fontWeight: 'bold',
  },
  tabBar: {
    backgroundColor: WHITE,
  },
  indicator: {
    backgroundColor: PRIMARY_THEME_COLOR,
  },
});

module.exports = TabBarStyles;
