import { StyleSheet } from 'react-native';
import { PRIMARY_THEME_COLOR } from '../../common/colors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainTitle: {
    color: PRIMARY_THEME_COLOR,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
