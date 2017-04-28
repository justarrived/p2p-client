import { StyleSheet } from 'react-native';

const PADDING = 10;

const styles = StyleSheet.create({

  padder: {
    paddingTop: PADDING * 7,
    paddingBottom: PADDING,
    paddingLeft: PADDING * 2,
    paddingRight: PADDING * 2,
  },

  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 300,
    height: 200,
    alignItems: 'center',
    margin: PADDING * 2,
  },

  title: {
    paddingTop: 4,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});

module.exports = styles;
