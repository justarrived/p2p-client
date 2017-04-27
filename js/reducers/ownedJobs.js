import { JOB_O_RECEIVE, JOBS_O_REQUEST, JOBS_O_RECEIVE } from '../actions/ownedJobs';
import { SESSION_REMOVE } from '../actions/session';

const initialState = {
  data: [],
  ownedJobsLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  if (action.type === JOBS_O_RECEIVE) {
    // Reveice all owned jobs
    if (action.error != null) {
      return {
        ...state,
        ownedJobsLoading: false,
        error: action.error,
      };
    }
    // TODO separate jobs depending on status
    return {
      ...state,
      data: action.jobJson.data,
      ownedJobsLoading: false,
      error: null,
    };
  }
  if (action.type === JOB_O_RECEIVE) {
    // Receive an owned job
    // TODO receive and add single jobs
    return state;
  }
  if (action.type === JOBS_O_REQUEST) {
    // Complete refresh requested
    return {
      ...state,
      ownedJobsLoading: true,
      error: null,
    };
  }
  if (action.type === SESSION_REMOVE) {
    // Remove local data when user signs out
    return initialState;
  }
  return state;
}
