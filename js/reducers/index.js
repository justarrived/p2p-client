import person from './person';
import languages from './languages';

const { combineReducers } = require('redux');

export default combineReducers({ person, languages });
