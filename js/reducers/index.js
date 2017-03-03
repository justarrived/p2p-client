var { combineReducers } = require('redux');
import cardNavigation from './cardNavigation';
import person from './person';

export default combineReducers({
  cardNavigation,
  person,
});
