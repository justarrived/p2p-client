import { StyleSheet } from 'react-native';
import { PRIMARY, WHITE } from './components/common/colors';

const TabBarStyles = StyleSheet.create({
  label: {
    color: PRIMARY,
    fontSize: 10,
    fontWeight: 'bold',
  },
  tabBar: {
    backgroundColor: WHITE,
  },
  indicator: {
    backgroundColor: PRIMARY,
  },
});

module.exports = TabBarStyles;
