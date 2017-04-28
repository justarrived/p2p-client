import { StyleSheet } from 'react-native';
import { WHITE, BADGE_COLOR_RED, BADGE_TEXT_SHADOW } from '../../../resources/colors';

const TAB_ICON_SIZE = 24;

const JATabIconStyle = StyleSheet.create({
  badge: {
    position: 'absolute',
    left: 12,
    bottom: 10,
    borderRadius: 10,
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: BADGE_COLOR_RED,
    alignItems: 'center',
    justifyContent: 'center',
  },

  badgeText: {
    color: WHITE,
    fontSize: 10,
    fontWeight: 'bold',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
    textShadowColor: BADGE_TEXT_SHADOW,
  },
});

module.exports = { JATabIconStyle, TAB_ICON_SIZE };
