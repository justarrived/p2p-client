import { StyleSheet } from 'react-native';
import { ICON } from '../../../resources/colors';

const styles = StyleSheet.create({
  pickerwrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    color: ICON,
  },
  languageLabel: {
    color: ICON,
    fontSize: 12,
  },
  picker: {
    flex: 1,
    height: 40,
  },
  viewWrapper: {
    paddingTop: 10,
  },
});

module.exports = styles;
