import { JOBC_NAME, JOBC_DESCRIPTION, JOBC_OWNER_ID, JOBC_CATEGORY,
JOBC_HOURS, JOBC_H_START_DATE, JOBC_H_START_TIME, JOBC_LANGUAGE,
JOBC_HOURLY_PAY, JOBC_SKILLS, JOBC_CLEAR_DATA,
JOBC_CITY, JOBC_STREET, JOBC_ZIP } from '../actions/jobCreation';
import { SESSION_REMOVE } from '../actions/session';

const initialState = {
  hours: 2,
  name: '',
  description: '',
  owner_user_id: null,
  job_date: '',
  job_end_date: '',
  language_id: 38, // TODO handle languages
  category_id: 8, // TODO handle categories
  hourly_pay_id: 1, // TODO handle hourly pay
  skills: [1], // TODO handle skills
  city: '',
  street: '',
  zip: '',
  helperDate: {
    date: '',
    time: '10:00',
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case JOBC_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case JOBC_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };
    case JOBC_OWNER_ID:
      return {
        ...state,
        owner_user_id: action.payload,
      };
    case JOBC_CATEGORY:
      return {
        ...state,
        category_id: action.payload,
      };
    case JOBC_HOURS:
      return {
        ...state,
        hours: action.payload,
      };
    case JOBC_H_START_DATE: {
      // Add date when job starts
      // TODO set correct end date
      const time = state.helperDate.time;
      const actualDate = `${action.payload}T${time}`;
      return {
        ...state,
        job_date: actualDate,
        job_end_date: actualDate,
        helperDate: {
          date: action.payload,
          time,
        },
      };
    }
    case JOBC_H_START_TIME: {
      // Add time of day when job starts
      // TODO set correct end date
      const date = state.helperDate.date;
      const actualDate = `${date}T${action.payload}`;
      return {
        ...state,
        job_date: actualDate,
        job_end_date: actualDate,
        helperDate: {
          date,
          time: action.payload,
        },
      };
    }
    case JOBC_LANGUAGE:
      return {
        ...state,
        language_id: action.payload,
      };
    case JOBC_HOURLY_PAY:
      return {
        ...state,
        hourly_pay_id: action.payload,
      };
    case JOBC_SKILLS:
      return {
        ...state,
        skills: action.payload,
      };
    case JOBC_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case JOBC_STREET:
      return {
        ...state,
        street: action.payload,
      };
    case JOBC_ZIP:
      return {
        ...state,
        zip: action.payload,
      };
    case (SESSION_REMOVE || JOBC_CLEAR_DATA):
      // Clear local data
      return initialState;
    default:
      return state;
  }
}
