import { getAuthJson, patchAuthJson, postAuthJson } from './networking';
import BASE_URL from './url';
/*
Class with methods for manipulating user info against API.
*/

const JOBS_PATH = `${BASE_URL}/api/v1/jobs`;

function getJobPath(jobId) {
  return `${JOBS_PATH}/${jobId}`;
}

function getJobUserPath(jobId, userId) {
  return `${getJobPath(jobId)}/users/${userId}`;
}

// TODO test
// get a specific job
export function getJob(jobId, token, onSuccess, onError) {
  getAuthJson(getJobPath(jobId), token, onSuccess, onError);
}

// TODO test
// Get all the jobs
export function getJobs(token, onSuccess, onError) {
  getAuthJson(JOBS_PATH, token, onSuccess, onError);
}

// TODO test
export function getJobsUser(jobId, userId, token, onSuccess, onError) {
  getAuthJson(`${getJobUserPath(jobId, userId)}/job-user`, token, onSuccess, onError);
}

// TODO test
export function getJobsUserMissingTraits(jobId, userId, token, onSuccess, onError) {
  getAuthJson(`${getJobUserPath(jobId, userId)}/missing-traits`, token, onSuccess, onError);
}

// TODO test
export function getJobsUsersMatching(jobId, token, onSuccess, onError) {
  getAuthJson(`${getJobPath(jobId)}/matching_users`, token, onSuccess, onError);
}

// TODO test
// Update a job
export function patchJob(jobId, token, json, onSuccess, onError) {
  patchAuthJson(getJobPath(jobId), token, json, onSuccess, onError);
}

// TODO test
// Post a new job
export function postJob(jobJson, token, onSuccess, onError) {
  postAuthJson(JOBS_PATH, token, jobJson, onSuccess, onError);
}
