import { combineReducers } from 'redux';

import userEdit from './userEdit';
import languages from './languages';
import jobCreation from './jobCreation';
import jobTypes from './jobTypes';
import jobs from './jobs';
import jobUsers from './jobUsers';
import ownedJobs from './ownedJobs';
import creditCards from './creditCards';
import navigation from './navigation';
import session from './session';
import userProfile from './userProfile';

export default combineReducers({
  userEdit,
  languages,
  navigation,
  jobCreation,
  jobTypes,
  jobs,
  jobUsers,
  ownedJobs,
  creditCards,
  session,
  userProfile,
});
