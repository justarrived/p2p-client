import { StyleSheet } from 'react-native';
import { MAIN_CERISE } from '../../common/colors';

const chooseWorkerStyles = StyleSheet.create({

  ratingGridStyle: {
    alignItems: 'center',
    flex: 1,
  },
  ratingStyle: {
    paddingRight: 2,
  },
  starStyle: {
    fontSize: 18,
    color: MAIN_CERISE,
  },
  priceGridStyle: {
    alignItems: 'center',
    flex: 1,
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
