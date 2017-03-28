import { StyleSheet } from 'react-native';
import { MAIN_CERISE, WHITE, SECONDARY_GRAY } from './components/common/colors';

const TabBarStyles = StyleSheet.create({
  label: {
    color: WHITE,
  },
  tabBar: {
    backgroundColor: SECONDARY_GRAY,
  },
  indicator: {
    backgroundColor: MAIN_CERISE,
  },
});

module.exports = TabBarStyles;
