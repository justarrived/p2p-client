import { StyleSheet } from 'react-native';
import { WHITE } from './colors';

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
  whiteBackgroundColor: {
    backgroundColor: WHITE,
  },
});

module.exports = globalStyle;
