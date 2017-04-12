import { combineReducers } from 'redux';

import account from './account';
import person from './person';
import languages from './languages';
import jobTypes from './jobTypes';
import ownedJobs from './ownedJobs';
import creditCards from './creditCards';
import navigation from './navigation';
import session from './session';
import user from './user';

export default combineReducers({
  account,
  person,
  languages,
  navigation,
  jobTypes,
  ownedJobs,
  creditCards,
  session,
  user,
});
