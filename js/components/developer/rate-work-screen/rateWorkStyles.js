import { StyleSheet } from 'react-native';

const ratingScreenStyles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 80,
    height: 80,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header1Text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  header2Text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  header3Text: {
    fontSize: 15,
    textAlign: 'center',
  },
  ratingText: {
    fontSize: 14,
    textAlign: 'center',
  },
});

module.exports = ratingScreenStyles;
