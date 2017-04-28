import { getUserJobs } from '../networking/user';

// Used for jobs owned by session user
export const JOB_O_RECEIVE = 'JOB_OWNED_RECEIVE';
export const JOBS_O_REQUEST = 'JOBS_OWNED_REQUEST';
export const JOBS_O_RECEIVE = 'JOBS_OWNED_RECEIVE';
export const JOB_O_SELECT = 'JOBS_OWNED_SELECT';

// Used to set state waiting for owned job
function requestOwnedJobs() {
  return {
    type: JOBS_O_REQUEST,
  };
}

// Used to set state with owned jobs
function receiveOwnedJobs(jobJson, error) {
  return {
    type: JOBS_O_RECEIVE,
    jobJson,
    error,
  };
}

// Used to update state with a new job
export function receiveOwnedJob(jobJson, error) {
  return {
    type: JOB_O_RECEIVE,
    jobJson,
    error,
  };
}

// Used to set a selected job
export function selectOwnedJob(jobJson) {
  return {
    type: JOB_O_SELECT,
    jobJson,
  };
}

// Get existing owned jobs from the api
export function requestGetUserJobs(userId, token) {
  // dispatch = method that sends state to store
  return (dispatch) => {
    // dispatch owned jobs have been requested
    dispatch(requestOwnedJobs());
    // request the owned jobs
    getUserJobs(userId, token,
      (jobJson) => {
        // dispatch the received jobs
        dispatch(receiveOwnedJobs(jobJson, null));
      },
      (error) => {
        // Dispatch the received error
        dispatch(receiveOwnedJobs(null, error));
      },
    );
  };
}
