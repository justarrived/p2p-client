import { StyleSheet } from 'react-native';
import { PRIMARY_THEME_COLOR } from '../../common/colors';

const chooseWorkerStyles = StyleSheet.create({
  starStyle: {
    marginLeft: 2,
    fontSize: 18,
    color: PRIMARY_THEME_COLOR,
  },
  priceGridStyle: {
    flexDirection: 'row',
    flex: 0,
  },
  pictureStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  priceStyle: {
    marginRight: 10,
  },
});

module.exports = chooseWorkerStyles;
