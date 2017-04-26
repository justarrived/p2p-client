import { StyleSheet } from 'react-native';
import { BLACK } from '../../common/colors';

const PADDING = 10;
const ratingScreenStyles = StyleSheet.create({

  contentContainerStyle: {
    margin: 10,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: PADDING,
  },
  viewBorder: {
    borderColor: BLACK,
    borderBottomWidth: 1,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 70,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header1Text: {
    color: BLACK,
    fontSize: 20,
    fontWeight: 'bold',
    margin: PADDING / 2,
  },
  header2Text: {
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
