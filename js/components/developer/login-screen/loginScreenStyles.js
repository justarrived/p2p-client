import { StyleSheet } from 'react-native';
import { GRAY, DARK_GRAY } from '../../../resources/colors';

const PADDING = 10;

const loginScreenStyles = StyleSheet.create({
  padder: {
    padding: PADDING,
  },

  inputFields: {
    paddingTop: 30,
  },

  inputField: {
    fontSize: 14,
    color: GRAY,
    fontWeight: 'bold',
  },

  cardForm: {
    flex: 0,
    padding: 0,
  },

  forgotPassword: {
    marginTop: 20,
    textAlign: 'right',
    color: DARK_GRAY,
    fontSize: 12,
    fontWeight: 'bold',
  },

  buttonContainer: {
    flex: 0,
    paddingTop: PADDING * 2,
    padding: PADDING,
  },

  textBetweenButtons: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 15,
    color: GRAY,
  },

  footerStyling: {
    backgroundColor: '#F0F0F0',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 12
  },

  footerText: {
    textAlign: 'center',
    color: DARK_GRAY,
    fontWeight: 'bold',
    fontSize: 12,
  },

});

module.exports = loginScreenStyles;
