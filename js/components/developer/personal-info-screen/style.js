import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 40,
    marginRight: 20,
    marginLeft: 20,
  },
  topContainer: {
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    paddingBottom: 10,
    borderColor: '#000',
    borderBottomWidth: 1,
  },
  nameText: {
    fontSize: 24,
    alignSelf: 'center',
    color: '#000',
  },
  input: {},
  logo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignItems: 'center',
    margin: 10 * 2,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = styles;
