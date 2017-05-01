import { StyleSheet } from 'react-native';
import { WHITE, TRANSPARENT } from '../../../resources/colors';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 25,
  },
  mediumFont: {
    fontSize: 16,
  },
  smallFont: {
    fontSize: 12,
  },
  textProperties: {
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 14,
    color: WHITE,
    backgroundColor: TRANSPARENT,
  },
});

export default styles;
