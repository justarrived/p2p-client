import { JOB_O_RECEIVE, JOBS_O_REQUEST, JOBS_O_RECEIVE } from '../actions/ownedJobs';
import { SESSION_REMOVE } from '../actions/session';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

function getErrorState(state, action) {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
}

export default function (state = initialState, action) {
  // console.log(`previous owned jobs state:\n${JSON.stringify(state, null, 4)}`);
  if (action.type === JOBS_O_RECEIVE) {
    // Reveice all owned jobs
    if (action.error != null) {
      return getErrorState(state, action);
    }
    // TODO separate jobs depending on status
    return {
      ...state,
      data: action.jobJson.data,
      loading: false,
      error: null,
    };
  }
  if (action.type === JOB_O_RECEIVE) {
    // Receive a single owned job
    if (action.error != null) {
      return getErrorState(state, action);
    }
    let newData;
    if (state.data === null || state.data.length === 0) {
      // If no other jobs exists in state
      newData = [action.jobJson.data];
    } else {
      // There are other jobs in state.
      // First remove any old version of the job
      state.data.forEach(
        (oldJob, index, oldArray) => {
          if (oldJob.id === action.jobJson.data.id) {
            oldArray.splice(index, 1);
          }
        });
      // add the new job
      newData = [...state.data, action.jobJson.data];
    }
    return {
      ...state,
      data: newData,
      loading: false,
      error: null,
    };
  }
  if (action.type === JOBS_O_REQUEST) {
    // Complete refresh requested
    return {
      ...state,
      loading: true,
      error: null,
    };
  }
  if (action.type === SESSION_REMOVE) {
    // Remove local data when user signs out
    return initialState;
  }
  return state;
}
