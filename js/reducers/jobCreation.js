import { JOBC_NAME, JOBC_DESCRIPTION, JOBC_OWNER_ID, JOBC_CATEGORY,
JOBC_HOURS, JOBC_START_DATE, JOBC_END_DATE, JOBC_LANGUAGE,
JOBC_HOURLY_PAY, JOBC_SKILLS, JOBC_CLEAR_DATA } from '../actions/jobCreation';
import { SESSION_REMOVE } from '../actions/session';

const initialState = {
  hours: 2,
  name: '',
  description: '',
  owner_user_id: null,
  job_date: null,
  job_end_date: null,
  language_id: 38, // TODO handle languages
  category_id: 8212, // TODO handle categories
  hourly_pay_id: 1, // TODO handle hourly pay
  skill_ids: [1], // TODO handle skills
};

export default function (state = initialState, action) {
  console.log(`previous create job state:\n${JSON.stringify(state, null, 4)}`);
  if (action.type === JOBC_NAME) {
    return {
      ...state,
      name: action.payload,
    };
  }
  if (action.type === JOBC_DESCRIPTION) {
    return {
      ...state,
      description: action.payload,
    };
  }
  if (action.type === JOBC_OWNER_ID) {
    return {
      ...state,
      owner_user_id: action.payload,
    };
  }
  if (action.type === JOBC_CATEGORY) {
    return {
      ...state,
      category_id: action.payload,
    };
  }
  if (action.type === JOBC_HOURS) {
    return {
      ...state,
      hours: action.payload,
    };
  }
  if (action.type === JOBC_START_DATE) {
    // If no end date set end date to start date
    return {
      ...state,
      job_date: action.payload,
      job_end_date: state.job_end_date === null ? action.payload : state.job_end_date,
    };
  }
  if (action.type === JOBC_END_DATE) {
    return {
      ...state,
      job_end_date: action.payload,
    };
  }
  if (action.type === JOBC_LANGUAGE) {
    return {
      ...state,
      language_id: action.payload,
    };
  }
  if (action.type === JOBC_HOURLY_PAY) {
    return {
      ...state,
      hourly_pay_id: action.payload,
    };
  }
  if (action.type === JOBC_SKILLS) {
    return {
      ...state,
      skill_ids: action.payload,
    };
  }
  if (action.type === SESSION_REMOVE
    || action.type === JOBC_CLEAR_DATA) {
    // Clear local data
    return initialState;
  }
  return state;
}
