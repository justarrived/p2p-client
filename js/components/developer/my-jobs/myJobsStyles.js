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
    width: 40,
    height: 20,
    borderRadius: 15,
  },

  green: {
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 10,
    backgroundColor: 'green',
  },

  grey: {
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 10,
    backgroundColor: 'grey',
  },

  blue: {
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 10,
    backgroundColor: 'dodgerblue',
  },

  yellow: {
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 10,
    backgroundColor: 'goldenrod',
  },

});

module.exports = loginScreenStyles;
