import { StyleSheet } from 'react-native';
import { BLACK } from '../../../resources/colors';

const style = StyleSheet.create({
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
  logoutButton: {
    marginTop: 20,
  },
});

module.exports = style;
