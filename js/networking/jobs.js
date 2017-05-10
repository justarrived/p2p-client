import { getAuthJson, patchAuthJson, postAuthJson } from './networking';
import BASE_URL from './url';
/*
Class with methods for manipulating user info against API.
*/

const JOBS_PATH = `${BASE_URL}/api/v1/jobs`;

function getJobPath(jobId) {
  return `${JOBS_PATH}/${jobId}`;
}

/* function getJobUserPath(jobId, userId) {
  return `${getJobPath(jobId)}/users/${userId}`;
}*/

// get a specific job
export function getJob(jobId, token, onSuccess, onError) {
  getAuthJson(getJobPath(jobId), token, onSuccess, onError);
}

// Get all the jobs
export function getJobs(token, onSuccess, onError) {
  getAuthJson(JOBS_PATH, token, onSuccess, onError);
}

// Update a job
export function patchJob(jobId, token, json, onSuccess, onError) {
  patchAuthJson(getJobPath(jobId), token, json, onSuccess, onError);
}

// Post a new job
export function postJob(jobJson, token, onSuccess, onError) {
  postAuthJson(JOBS_PATH, token, jobJson, onSuccess, onError);
}

// Get the job users
export function getJobUsers(jobId, token, onSuccess, onError) {
  getAuthJson(`${getJobPath(jobId)}/users`, token, onSuccess, onError);
}
