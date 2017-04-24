import { StyleSheet } from 'react-native';

const PADDING = 10;

const styles = StyleSheet.create({

  padder: {
    paddingTop: PADDING,
    paddingBottom: PADDING,
    paddingLeft: PADDING * 2,
    paddingRight: PADDING * 2,
  },

  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignItems: 'center',
    margin: PADDING * 2,
  },

  title: {
    paddingTop: PADDING * 6,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  description: {
    paddingTop: PADDING,
    fontSize: 12,
    textAlign: 'center',
  },

  buttonContainer: {
    alignItems: 'center',
    paddingTop: PADDING * 2,
  },

  buttonContainer2: {
    alignItems: 'center',
    paddingTop: PADDING,
  },

  button: {
    alignSelf: 'center',
  },

});

module.exports = styles;
