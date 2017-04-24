import { StyleSheet } from 'react-native';

const PADDING = 10;

const styles = StyleSheet.create({

  title: {
    paddingTop: PADDING * 6,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  description: {
    paddingTop: PADDING * 2,
    fontSize: 12,
    textAlign: 'center',
  },

  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: PADDING * 2,
    padding: PADDING,
  },

  button: {
    alignSelf: 'center',
  },

  padder: {
    paddingTop: PADDING * 2,
    paddingBottom: PADDING * 2,
    paddingLeft: PADDING * 5,
    paddingRight: PADDING * 5,
  },
});

module.exports = styles;
