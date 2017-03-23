import { StyleSheet } from 'react-native';
import { WHITE } from '../../common/colors';

const badgeStyles = StyleSheet.create({
  badge: {
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 20,
  },

  badgeText: {
    fontSize: 12,
    color: WHITE,
  },
});

module.exports = badgeStyles;
