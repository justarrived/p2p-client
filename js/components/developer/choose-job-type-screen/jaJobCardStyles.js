import { StyleSheet } from 'react-native';
import { WHITE } from '../../../resources/colors';

const styles = StyleSheet.create({
  imageProperties: {
    margin: 5, 
    width: 160,
    height: 80,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  textProperties: {
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: WHITE,
  },
});

export default styles;
