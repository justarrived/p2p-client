import account from './account';
import person from './person';
import languages from './languages';
import jobTypes from './jobTypes';
import creditCards from './creditCards';

const { combineReducers } = require('redux');

export default combineReducers({ person, languages, account, jobTypes, creditCards });
