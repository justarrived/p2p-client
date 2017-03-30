import { StyleSheet } from 'react-native';
import { WHITE, SECONDARY_BLUE } from '../../common/colors';

const styles = StyleSheet.create({
  form: {
    flex: 1,
    marginRight: 16,
    marginLeft: 2,
    paddingBottom: 16,
  },
  formContainer: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
  },
  tranparentButtonText: {
    color: SECONDARY_BLUE,
  },
  regButtonText: {
    color: WHITE,
    alignSelf: 'center',
  },
  secondButtonPadding: {
    marginTop: 10,
    flex: 1,
  },
  fullFlex: {
    flex: 1,
    alignItems: 'center',
  },
});

module.exports = styles;
