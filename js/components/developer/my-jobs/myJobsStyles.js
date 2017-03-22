import { StyleSheet } from 'react-native';

const PADDING = 10;
const GREEN = '#008000';
const GREY = 'grey';
const BLUE = 'dodgerblue';
const YELLOW = 'goldenrod';
const WHITE = 'white';


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
    backgroundColor: GREEN,
  },

  grey: {
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 10,
    backgroundColor: GREY,
  },

  blue: {
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 10,
    backgroundColor: BLUE,
  },

  yellow: {
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 10,
    backgroundColor: YELLOW,
  },

  badgeText: {
    fontSize: 12,
    color: WHITE,
  },

});

module.exports = loginScreenStyles;
