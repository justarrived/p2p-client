import { StyleSheet } from 'react-native';
import { BLACK, MAIN_CERISE } from '../../common/colors';

const styles = StyleSheet.create({
  infoContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 0,
  },
  topGrid: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLeftCol: {
    flex: 1,
  },
  topRightCol: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topMidCol: {
    flex: 2,
    overflow: 'visible',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starStyle: {
    marginLeft: 2,
    fontSize: 35,
    color: MAIN_CERISE,
  },
  ratingStyle: {
    fontSize: 30,
  },
  priceStyle: {
    fontSize: 15,
  },
  priceRow: {
    alignItems: 'center',
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
