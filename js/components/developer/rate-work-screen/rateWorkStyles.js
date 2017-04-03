import { StyleSheet } from 'react-native';

const PADDING = 10;
const ratingScreenStyles = StyleSheet.create({

  contentContainerStyle: {
    margin: 10,
  },

  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: PADDING / 2,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 70,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header1Text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: PADDING / 2,
  },
  header2Text: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: PADDING / 2,
  },
  header3Text: {
    fontSize: 14,
    textAlign: 'center',
    margin: PADDING / 2,
  },
  ratingText: {
    fontSize: 14,
    textAlign: 'center',
    margin: PADDING / 5,
  },
  textBox: {
    margin: PADDING,
  },
});

module.exports = ratingScreenStyles;
