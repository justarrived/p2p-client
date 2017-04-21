import { StyleSheet } from 'react-native';
import { WHITE, PRIMARY_THEME_COLOR, GRADIENT_ORANGE_COLOR } from '../../common/colors';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 25
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 14,
    color: WHITE,
    backgroundColor: 'transparent',
  },
});

export default styles;
