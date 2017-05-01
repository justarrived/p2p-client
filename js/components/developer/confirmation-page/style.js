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
    margin: PADDING * 2,
  },

  title: {
    paddingTop: 4,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  description: {
    paddingTop: PADDING,
    fontSize: 12,
    textAlign: 'center',
  },

  nextButtonContainer: {
    alignItems: 'center',
    paddingTop: PADDING * 2,
    paddingLeft: 5,
    paddingRight: 5,
  },

  skipButtonContainer: {
    alignItems: 'center',
    paddingTop: PADDING,
  },

  alignButtonCenter: {
    alignSelf: 'center',
    paddingRight: 70,
    paddingLeft: 70,
  },

});

module.exports = styles;
