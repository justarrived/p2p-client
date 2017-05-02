import { getJob, getJobs, postJob, patchJob } from '../networking/jobs';
import { receiveOwnedJob } from './ownedJobs';

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

// Used to set state with received job (one)
function receiveJob(jobId, jobJson, error) {
  return {
    type: JOB_RECEIVE,
    jobId,
    jobJson,
    error,
  };
}

// Used to set state with received jobs (all)
function receiveJobs(jobJson, error) {
  return {
    type: JOBS_RECEIVE,
    jobJson,
    error,
  };
}

// Used to set state waiting for new job
function createJob() {
  return {
    type: JOB_CREATE,
  };
}

// Used to set state waiting for updated job
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
export function requestPostJob(requestJson, token) {
  return (dispatch) => {
    dispatch(createJob());
    postJob(requestJson, token,
      (responseJson) => {
        dispatch(receiveJob(
          responseJson.data.id,
          responseJson,
          null));
        // Created job is owned job
        dispatch(receiveOwnedJob(responseJson));
      },
      (error) => {
        dispatch(receiveJob(null, null, error));
      },
    );
  };
}

// update existing job through API
export function requestPatchJob(jobId, token, requestJson) {
  return (dispatch) => {
    dispatch(updateJob(jobId));
    patchJob(jobId, token, requestJson,
      (jobJson) => {
        dispatch(receiveJob(
          jobJson.data.id,
          jobJson,
          null));
      },
      (error) => {
        dispatch(receiveJob(null, null, error));
      },
    );
  };
}
