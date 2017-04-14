import { StyleSheet } from 'react-native';
import { MAIN_CERISE, BLACK, WHITE } from '../../common/colors';

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
    marginLeft: 15,
    marginRight: 15,
  },
  textStyle: {
    color: BLACK,
    fontSize: 12,
  },
  dateStyle: {
    color: BLACK,
    fontSize: 14,
  },
  ratingStyle: {
    color: BLACK,
    fontSize: 18,
  },
  rightColStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItemStyle: {
    paddingTop: 2,
    paddingBottom: 2,
    marginLeft: 0,
    paddingRight: 0,
    backgroundColor: WHITE,
  },
  ratingRowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftColSize: {
    flex: 2.3,
  },
});

module.exports = referenceStyles;
