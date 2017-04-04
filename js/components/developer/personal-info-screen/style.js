import { StyleSheet } from 'react-native';
import { BLACK } from '../../common/colors';

const styles = StyleSheet.create({
  form: {
    flex: 1,
    marginRight: 16,
    marginLeft: 2,
  },
  formContainer: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 20,
    margin: 0,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  logoutButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

module.exports = styles;
