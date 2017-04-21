import { getAuthJson, patchAuthJson, postJson } from './networking';
import BASE_URL from './url';
/*
Class with methods for manipulating user info against API.
*/

const USERS_PATH = `${BASE_URL}/api/v1/users`;

function getUserPath(userId) {
  return `${USERS_PATH}/${userId}`;
}

export function getUser(userId, token, onSuccess, onError) {
  getAuthJson(getUserPath(userId), token, onSuccess, onError);
}

export function patchUser(userId, token, json, onSuccess, onError) {
  patchAuthJson(getUserPath(userId), token, json, onSuccess, onError);
}

export function postUser(json, onSuccess, onError) {
  postJson(USERS_PATH, json, onSuccess, onError);
}
