import { StyleSheet } from 'react-native';

const PADDING = 10;

const chooseJobTypeStyles = StyleSheet.create({
  padder: {
    padding: PADDING,
  },

  coverPhoto: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    padding: 10,
  },

  iconRightContainer: {
    flex: 0,
  },
});

module.exports = chooseJobTypeStyles;
