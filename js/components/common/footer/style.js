import { StyleSheet } from 'react-native';
import { WHITE_SMOKE, NOTE } from '../../common/colors';

const styles = StyleSheet.create({
  footerView: {
    backgroundColor: WHITE_SMOKE,
  },
  footerText: {
    color: NOTE,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'center',
  },
});

module.exports = styles;
