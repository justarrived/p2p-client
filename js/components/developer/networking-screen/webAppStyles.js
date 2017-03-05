import { StyleSheet } from 'react-native';

const TITLE_COLOR = '#171A20';
const MAIN_CERISE = '#E5007D';
const SECONDARY_GRAY = '#383F4E';
// const SECONDARY_BLUE = '#0069D2';

const webAppStyles = StyleSheet.create({
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: TITLE_COLOR,
  },
  textCompany: {
    fontWeight: 'bold',
    color: MAIN_CERISE,
  },
  textContent: {
    paddingBottom: 10,
    color: TITLE_COLOR,
  },
  textMoney: {
    fontSize: 30,
    fontWeight: 'bold',
    color: MAIN_CERISE,
  },
  textCurrency: {
    fontSize: 20,
    color: SECONDARY_GRAY,
  },
  textLeft: {
    color: SECONDARY_GRAY,
  },
  textRight: {
    color: SECONDARY_GRAY,
  },
});

module.exports = webAppStyles;
