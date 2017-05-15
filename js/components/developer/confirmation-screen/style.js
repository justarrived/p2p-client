import { StyleSheet } from 'react-native';
import { TITLE_COLOR } from '../../../resources/globalStyle';

const PADDING = 10;

const styles = StyleSheet.create({

  picture: {
    marginTop: 40,
    width: 140,
    height: 140,
    margin: PADDING,
    alignSelf: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: TITLE_COLOR,
  },

  descriptionContainer: {
    padding: PADDING,
  },

  description: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  marginBottom: {
    marginBottom: PADDING,
  },

  buttonPadder: {
    paddingTop: PADDING,
    paddingBottom: PADDING,
  },

  skipInviteButton: {
    margin: PADDING,
    alignSelf: 'center',
  },

  skipInvite: {
    fontWeight: 'bold',
  },

});

module.exports = styles;
