import { StyleSheet } from 'react-native';
import { PRIMARY_THEME_COLOR } from '../../common/colors';

const JASpinnerColor = PRIMARY_THEME_COLOR;

const JASpinnerStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

module.exports = { JASpinnerStyle, JASpinnerColor };
