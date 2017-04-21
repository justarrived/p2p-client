import { StyleSheet } from 'react-native';
import { PRIMARY } from '../../common/colors';

const JASpinnerColor = PRIMARY;

const JASpinnerStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

module.exports = { JASpinnerStyle, JASpinnerColor };
