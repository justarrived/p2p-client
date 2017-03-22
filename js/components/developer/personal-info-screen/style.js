import { StyleSheet } from 'react-native';
import { BLACK } from '../../common/color';

const styles = StyleSheet.create({
  formContainer: {
    paddingRight: 15,
  },
  topContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    marginRight: 15,
    marginLeft: 15,
    borderColor: BLACK,
    borderBottomWidth: 1,
  },
  buttonContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 15,
    paddingLeft: 15,
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
