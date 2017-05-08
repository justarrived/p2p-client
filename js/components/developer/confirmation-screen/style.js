import { StyleSheet } from 'react-native';

const PADDING = 10;

const styles = StyleSheet.create({

  padder: {
    paddingTop: PADDING,
    paddingBottom: PADDING,
    paddingLeft: PADDING * 2,
    paddingRight: PADDING * 2,
  },

  pictureContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  picture: {
    width: 250,
    height: 150,
    alignItems: 'center',
    margin: PADDING,
  },

  textCon: {
    paddingLeft: PADDING,
    paddingRight: PADDING,
  },

  title: {
    paddingTop: 4,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  description: {
    paddingTop: PADDING,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  skipInvite: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  nextButtonContainer: {
    paddingTop: PADDING * 4,
    paddingBottom: PADDING,
  },

  skipButtonContainer: {
    alignItems: 'center',
    paddingTop: PADDING * 6,
  },

  alignButtonCenter: {
    alignSelf: 'center',
  },

});

module.exports = styles;
