import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 0,
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: 'white',
    borderTopWidth: 0.3,
    borderColor: 'grey',
  },
  buttonStyle: {
    flex: 1,
    height: 50,
  },
});


module.exports = styles;
