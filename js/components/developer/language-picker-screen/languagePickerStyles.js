import { StyleSheet } from 'react-native';

const TITLE_COLOR = '#171A20';
const MAIN_CERISE = '#E5007D';
const SECONDARY_GRAY = '#383F4E';
// const SECONDARY_BLUE = '#0069D2';

const languagePickerStyles = StyleSheet.create({
  flexList: {
    flex: 1,
    alignItems: 'flex-start',
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
    borderColor: MAIN_CERISE,
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
    borderBottomColor: MAIN_CERISE,
  },
});

module.exports = languagePickerStyles;
