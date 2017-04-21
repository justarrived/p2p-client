import { StyleSheet } from 'react-native';
import { MAIN_CERISE, BLACK, WHITE, SECONDARY_BLUE } from '../../common/colors';

const referenceStyles = StyleSheet.create({
  starStyle: {
    marginLeft: 2,
    fontSize: 18,
    color: MAIN_CERISE,
  },
  pictureStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    paddingTop: 8,
    marginLeft: 8,
    marginRight: 8,
  },
  textStyle: {
    color: BLACK,
    fontSize: 14,
  },
  secondaryTextStyle: {
    fontSize: 14,
  },
  ratingStyle: {
    fontSize: 16,
  },
  rightColStyle: {
    paddingLeft: 8,
    paddingRight: 8,
    flex: 0,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  listItemStyle: {
    paddingTop: 8,
    paddingBottom: 8,
    marginLeft: 0,
    paddingRight: 0,
    backgroundColor: WHITE,
  },
  ratingRowStyle: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  listItemViewStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  midColSize: {
    flex: 1,
  },
});

module.exports = referenceStyles;
