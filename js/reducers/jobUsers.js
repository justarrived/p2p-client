import { JOBS_USER_REQUEST, JOBS_USER_RECEIVE, JOBS_USER_SELECT } from '../actions/jobUsers';
import { SESSION_REMOVE } from '../actions/session';

const initialState = {
  jobUserJson: null,
  loading: false,
  jobUserError: null,
  selectedUser: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case JOBS_USER_REQUEST:
      // starting to fetch data requested
      return {
        ...state,
        loading: true,
        jobUserError: null,
      };
    case JOBS_USER_RECEIVE:
      return {
        ...state,
        jobUserJson: action.jobUserJson,
        loading: false,
        jobUserError: action.jobUserError,
      };
    case JOBS_USER_SELECT:
      return {
        ...state,
        selectedUser: action.jobUserJson,
      };
    case SESSION_REMOVE:
      // Remove local data when user signs out
      return initialState;
    default:
      return state;
  }
}
