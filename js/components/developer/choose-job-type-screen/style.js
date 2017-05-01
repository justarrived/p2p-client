import { StyleSheet } from 'react-native';
import { BLACK } from '../../../resources/colors';

const styles = StyleSheet.create({
  jobCardContainer: {
    paddingTop: 10, 
    justifyContent: 'center', 
    flexDirection: 'row', 
    flexWrap: 'wrap',
  },
  serviceSelectionHeader: {
    marginTop: 30,
    fontSize: 14,
    fontWeight: 'bold',
    color: BLACK,
  },
});

export default styles;