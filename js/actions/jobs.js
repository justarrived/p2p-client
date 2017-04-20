import { getJob, getJobs, postJob, patchJob } from '../networking/jobs';

export const JOB_REQUEST = 'JOB_REQUEST';
export const JOB_RECEIVE = 'JOB_RECEIVE';
export const JOB_CREATE = 'JOB_CREATE';
export const JOB_UPDATE = 'JOB_UPDATE';
export const JOBS_REQUEST = 'JOBS_REQUEST';
export const JOBS_RECEIVE = 'JOBS_RECEIVE';

// Used to set state waiting for job
function requestJob(jobId) {
  return {
    type: JOB_REQUEST,
    jobId,
  };
}

// Used to set state waiting for jobs
function requestJobs() {
  return {
    type: JOBS_REQUEST,
  };
}

// Used to set state with received job
function receiveJob(jobId, jobJson, error) {
  return {
    type: JOB_RECEIVE,
    jobId,
    jobJson,
    error,
  };
}

// Used to set state with received jobs
function receiveJobs(jobJson, error) {
  return {
    type: JOBS_RECEIVE,
    jobJson,
    error,
  };
}

// Used to set state with new user
function createJob() {
  return {
    type: JOB_CREATE,
  };
}

// Used to set state with updated user
function updateJob(jobId) {
  return {
    type: JOB_UPDATE,
    jobId,
  };
}

// Get an existing job from API
export function requestGetJob(jobId, token) {
  // dispatch = method that sends state to store
  return (dispatch) => {
    // dispatch job has been requested
    dispatch(requestJob(jobId));
    // request the job
    getJob(jobId, token,
      (jobJson) => {
        // dispatch the received job
        dispatch(receiveJob(
          jobJson.data.id,
          jobJson,
          null));
      },
      (error) => {
        // Dispatch the received error
        dispatch(receiveJob(null, null, error));
      },
    );
  };
}

// Get all existing jobs from API
export function requestGetJobs(token) {
  return (dispatch) => {
    dispatch(requestJobs());
    getJobs(token,
      (jobJson) => {
        dispatch(receiveJobs(jobJson, null));
      },
      (error) => {
        dispatch(receiveJobs(null, error));
      },
    );
  };
}

// Create a new job through API
export function requestPostJob(requestJson) {
  return (dispatch) => {
    dispatch(createJob());
    postJob(requestJson,
      (responseJson) => {
        dispatch(receiveJob(
          responseJson.data.id,
          responseJson,
          null));
      },
      (error) => {
        dispatch(receiveJob(null, null, error));
      },
    );
  };
}

// update existing job through API
export function requestPatchUser(jobId, token, requestJson) {
  return (dispatch) => {
    dispatch(updateJob(jobId));
    patchJob(jobId, token, requestJson,
      (userJson) => {
        dispatch(receiveJob(
          userJson.data.id,
          userJson,
          null));
      },
      (error) => {
        dispatch(receiveJob(null, null, error));
      },
    );
  };
}
