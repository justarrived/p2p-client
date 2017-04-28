import { StyleSheet } from 'react-native';

const PADDING = 10;

const styles = StyleSheet.create({

  padder: {
    paddingTop: PADDING * 8,
    paddingBottom: PADDING,
    paddingLeft: PADDING * 2,
    paddingRight: PADDING * 2,
  },

  logoContainer: {
    paddingBottom: PADDING * 3,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = styles;
