var { combineReducers } = require('redux');
import cardNavigation from './cardNavigation';
import list from './list';

export default combineReducers({
  cardNavigation,
  list,
});
