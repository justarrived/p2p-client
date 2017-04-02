import { StyleSheet } from 'react-native';
import { MAIN_CERISE } from '../../common/colors';

const chooseWorkerStyles = StyleSheet.create({
  starStyle: {
    marginLeft: 2,
    fontSize: 18,
    color: MAIN_CERISE,
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
