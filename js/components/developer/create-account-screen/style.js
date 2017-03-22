import { StyleSheet } from 'react-native';
import { WHITE, SECONDARY_BLUE } from '../../common/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 16,
  },
  bottomContainer: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  input: {
    marginRight: 0,
    marginBottom: 0,
  },
  dropdown: {
    marginTop: 20,
    marginLeft: 10,
  },
  button: {
    marginTop: 20,
  },
  tranparentButtonText: {
    color: SECONDARY_BLUE,
  },
  regButtonText: {
    color: WHITE,
  },
  secondButtonPadding: {
    marginTop: 10,
  },
});

module.exports = styles;
