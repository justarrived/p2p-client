import { StyleSheet } from 'react-native';
import { BLACK, PRIMARY_THEME_COLOR } from '../../../resources/colors';

const styles = StyleSheet.create({
  topLeftCol: {
    flex: 1,
  },
  topRightCol: {
    flex: 1,
    alignItems: 'flex-end',
  },
  topMidCol: {
    flex: 0,
  },
  starStyle: {
    marginLeft: 2,
    fontSize: 40,
    color: PRIMARY_THEME_COLOR,
  },
  unRatedStyle: {
    fontSize: 18,
  },
  ratingStyle: {
    fontSize: 30,
  },
  totPriceStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  priceStyle: {
    fontSize: 14,
  },
  priceRow: {
    marginTop: 10,
    flex: 0,
  },
  starRow: {
    flex: 0,
  },
  nameText: {
    fontSize: 24,
    alignSelf: 'center',
    color: BLACK,
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 10,
  },
});

module.exports = styles;
