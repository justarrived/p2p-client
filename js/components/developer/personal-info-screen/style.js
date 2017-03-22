import { StyleSheet } from 'react-native';
import { BLACK } from '../../common/color';

const styles = StyleSheet.create({
  formContainer: {
    paddingRight: 15,
  },
  topContainer: {
    marginTop: 20,
    paddingBottom: 10,
    marginRight: 15,
    marginLeft: 15,
    borderColor: BLACK,
    borderBottomWidth: 1,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 15,
    marginLeft: 15,
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
    margin: 20,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButtonGroup: {
    marginRight: 10,
  },
});

module.exports = styles;
