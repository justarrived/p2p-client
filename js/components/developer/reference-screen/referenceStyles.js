import { StyleSheet } from 'react-native';
import { MAIN_CERISE, BLACK } from '../../common/colors';

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
  textboxStyle: {
    fontSize: 14,
    textAlign: 'left',
    color: BLACK,
  },
  dateStyle: {
    fontSize: 14,
    paddingTop: 10,
  },
  ratingStyle: {
    fontSize: 18,
  },
  leftColStyle: {
    flex: 2,
  },
  rightColStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItemStyle: {
    paddingTop: 0,
    paddingBottom: 0,
    marginLeft: 0,
    paddingRight: 0,
  },
  ratingRowStyle: {
    alignItems: 'center',
    paddingBottom: 40,
  },
});

module.exports = referenceStyles;
