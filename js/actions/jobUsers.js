import { getJobUsers } from '../networking/jobs';
import { selectInitialized } from './ownedJobs';

// Used to handle task applications
export const JOBS_USER_REQUEST = 'JOBS_USER_REQUEST';
export const JOBS_USER_RECEIVE = 'JOBS_USER_RECEIVE';
export const JOBS_USER_SELECT = 'JOBS_USER_SELECT';

// Used to set state waiting for data
function requestJobUsers() {
  return {
    type: JOBS_USER_REQUEST,
  };
}

// Used to set state with received data
function receiveJobUsers(jobUserJson, jobUserError) {
  return {
    type: JOBS_USER_RECEIVE,
    jobUserJson,
    jobUserError,
  };
}

// Used to set a selected job
export function selectJobUser(jobUserJson) {
  return {
    type: JOBS_USER_SELECT,
    jobUserJson,
  };
}

// Get existing job users from the API
export function requestGetJobUsers(jobId, token) {
  // dispatch = method that sends state to store
  return (dispatch) => {
    // dispatch requested has been sent
    // TODO remove console.log(`requesting job users for job ${jobId}`);
    dispatch(requestJobUsers());
    // send and handle the request
    getJobUsers(jobId, token,
      (jobUserJson) => {
        // dispatch the received data
        // TODO remove console.log(`received job users for job ${jobId}`);
        dispatch(receiveJobUsers(jobUserJson, null));
        dispatch(selectInitialized());
      },
      (error) => {
        // Dispatch the received error
        dispatch(receiveJobUsers(null, error));
      },
    );
  };
}
