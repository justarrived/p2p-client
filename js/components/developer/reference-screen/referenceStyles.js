import { StyleSheet } from 'react-native';
import { PRIMARY_THEME_COLOR, BLACK, WHITE } from '../../../resources/colors';

const referenceStyles = StyleSheet.create({
  iconContainer: {
    flex: 0,
    marginLeft: 0,
    borderBottomWidth: 0,
    alignSelf: 'stretch',
    alignItems: 'flex-start',
  },
  starStyle: {
    marginLeft: 2,
    fontSize: 18,
    color: PRIMARY_THEME_COLOR,
  },
  pictureStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textStyle: {
    color: BLACK,
  },
  ratingStyle: {
    fontSize: 16,
  },
  listItemStyle: {
    backgroundColor: WHITE,
    marginLeft: 0,
  },
  ratingRowStyle: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

module.exports = referenceStyles;
