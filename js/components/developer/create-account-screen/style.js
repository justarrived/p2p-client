import { StyleSheet } from 'react-native';
import { PRIMARY_TEXT } from '../../common/colors';

const styles = StyleSheet.create({
  colPadding: {
    paddingRight: 20,
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: PRIMARY_TEXT,
    alignSelf: 'center',
  },
  buttonContainer: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

module.exports = styles;
