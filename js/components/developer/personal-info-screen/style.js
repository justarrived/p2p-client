import { StyleSheet } from 'react-native';
import { BLACK } from '../../common/color';

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
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 24,
    alignSelf: 'center',
    color: BLACK,
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignItems: 'center',
    marginBottom: 10,
  },
  secondaryButtonGroup: {
    marginRight: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonFlex: {
    flex: 1,
  },
});

module.exports = styles;
