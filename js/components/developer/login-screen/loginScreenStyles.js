import { StyleSheet } from 'react-native';

const loginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  logo: {
    width: 150,
    height: 150,
    flex: 1,
    justifyContent: 'center',
  },

  bottomForm: {
    flex: 0,
    alignSelf: 'stretch',
  },

  loginButton: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 12,
    marginTop: 10,
  },

  createAccountNote: {
    alignSelf: 'center',
    marginBottom: 12,
  },
});

module.exports = loginScreenStyles;
