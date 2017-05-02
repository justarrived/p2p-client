import { StyleSheet } from 'react-native';
import { BLACK } from '../../../resources/colors';

const PADDING = 10;
const ratingScreenStyles = StyleSheet.create({

  alignCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: BLACK,
    fontSize: 20,
    fontWeight: 'bold',
    margin: PADDING / 2,
  },
  bodyText: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: PADDING,
    textAlign: 'center',
  },
  ratingText: {
    color: BLACK,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    margin: PADDING / 2,
  },
  textBox: {
    margin: PADDING / 2,
    paddingBottom: PADDING * 2,
  },
  buttonStyle: {
    width: 160,
    alignSelf: 'center',
  },
});

module.exports = ratingScreenStyles;
