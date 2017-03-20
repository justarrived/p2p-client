import { StyleSheet } from 'react-native';

const PADDING = 10;

const loginScreenStyles = StyleSheet.create({
  padder: {
    padding: PADDING,
  },

  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 43,
    height: 43,
    borderRadius: 22,
  },

  logo2: {
    width: 18,
    height: 18,
    borderRadius: 10,
  },

});

module.exports = loginScreenStyles;
