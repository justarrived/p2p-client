import { StyleSheet } from 'react-native';

const PADDING = 10;
const ROW_MARGIN = 10;

const globalStyle = StyleSheet.create({
  padder: {
    padding: PADDING,
  },

  rowMargin: {
    marginTop: ROW_MARGIN,
  },

  noPadding: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
});

module.exports = globalStyle;
