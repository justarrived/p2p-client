import { StyleSheet } from 'react-native';

const chooseLanguageStyles = StyleSheet.create({
  textStyleUpper: {
    fontSize: 15,
    fontStyle: 'italic',
    marginLeft: 15,
  },

  textStyleUnder: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 25,
  },

  cardInner: {
    flex: 0,
    margin: 10,
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
    margin: 20,
  },
});

module.exports = chooseLanguageStyles;
