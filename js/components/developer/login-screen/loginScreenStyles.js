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
    width: 140,
    height: 140,
    borderRadius: 70,
    alignItems: 'center',
    margin: PADDING * 2,
  },

  cardForm: {
    flex: 0,
    paddingTop: PADDING,
    paddingBottom: PADDING,
  },

  buttonContainer: {
    flex: 0,
    paddingTop: PADDING * 2,
    padding: PADDING,
  },

  secondaryButtonsContainer: {
    marginTop: PADDING * 2,
  },

  secondaryButtonSpacing: {
    marginRight: PADDING,
  },
});

module.exports = loginScreenStyles;
