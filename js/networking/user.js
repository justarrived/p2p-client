import { getAuthJson, patchAuthJson, postJson } from './networking';
import { createJsonDataAttributes } from './json';
/*
Class with methods for manipulating user info against API.
*/

const BASE_URL = 'https://sandbox-api.justarrived.xyz';
const USERS_PATH = '/api/v1/users';

function getUserPath(userId) {
  return `${BASE_URL + USERS_PATH}/${userId}`;
}

export function getUser(userId, token, onSuccess, onError) {
  getAuthJson(getUserPath(userId),
    token, onSuccess, onError);
}

export function patchUser(userId, token, json, onSuccess, onError) {
  patchAuthJson(getUserPath(userId), token, json, onSuccess, onError);
}

export function patchUserDescription(userId, token, description, onSuccess, onError) {
  const updateJson = createJsonDataAttributes({ description });
  patchUser(userId, token, updateJson, onSuccess, onError);
}

export function postUser(email, password, onSuccess, onError) {
  const requestJson = createJsonDataAttributes({
    email,
    password,
    consent: true,
    system_language_id: 38,
    first_name: 'SomeName',
    last_name: 'SomeLastName' });
  postJson(BASE_URL + USERS_PATH,
    requestJson, onSuccess, onError);
}
