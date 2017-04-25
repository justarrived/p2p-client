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
    height: 250,
    alignItems: 'center',
    margin: PADDING * 2,
  },

  title: {
    paddingTop: PADDING,
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
    paddingLeft: 5,
    paddingRight: 5,
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
