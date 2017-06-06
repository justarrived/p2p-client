import { StyleSheet } from 'react-native';
import { WHITE, TRANSPARENT } from '../../../resources/colors';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 14,
    color: WHITE,
    backgroundColor: TRANSPARENT,
  },
});

export default styles;
