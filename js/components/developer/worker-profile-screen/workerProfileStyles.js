import { StyleSheet } from 'react-native';
import { BLACK, MAIN_CERISE } from '../../common/colors';

const styles = StyleSheet.create({
  infoContainer: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
  },
  topRow: {
    paddingTop: 8,
    paddingRight: 8,
    paddingLeft: 8,
  },
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
    color: MAIN_CERISE,
  },
  ratingStyle: {
    fontSize: 30,
  },
  priceStyle: {
    fontSize: 15,
  },
  priceRow: {
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
