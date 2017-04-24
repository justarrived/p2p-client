import { StyleSheet } from 'react-native';
import { TITLE_COLOR, PRIMARY_THEME_COLOR, SECONDARY_GRAY } from '../../common/colors';

const languageDisplayStyles = StyleSheet.create({
  cardItemTitle: {
    paddingBottom: 0,
  },
  cardItemList: {
    paddingTop: 0,
  },
  rowList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  rowListItem: {
    marginTop: 2,
    marginRight: 4,
    padding: 5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: PRIMARY_THEME_COLOR,
  },
  rowListItemText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: SECONDARY_GRAY,
  },
  myLanguagesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: TITLE_COLOR,
  },
  myLanguagesEmptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: TITLE_COLOR,
    borderBottomWidth: 2,
    borderBottomColor: PRIMARY_THEME_COLOR,
  },
});

module.exports = languageDisplayStyles;
