import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
  },
  topContainer: {
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    paddingBottom: 10,
    borderColor: '#000',
    borderBottomWidth: 1,
  },
  bottomContainer: {
    marginTop: 40,
    marginBottom: 40,
    marginRight: 20,
    marginLeft: 20,
  },

  nameText: {
    fontSize: 24,
    alignSelf: 'center',
    color: '#000',
  },
  input: {
    marginRight: 20,
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignItems: 'center',
    margin: 20,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = styles;
