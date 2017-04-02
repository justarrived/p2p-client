import { getAuthJson, patchAuthJson } from './networking';
/*
Class with methods for manipulating user info against API.
*/

const BASE_URL = 'https://sandbox-api.justarrived.xyz';
const USERS_PATH = '/api/v1/users';

function getUserPath(userId) {
  return `${BASE_URL + USERS_PATH}/${userId}`;
}

function getJsonDataAttributes(attributes) {
  return {
    data: {
      attributes,
    },
  };
}

export function getUser(userId, token, onSuccess, onError) {
  getAuthJson(getUserPath(userId),
    token, onSuccess, onError);
}

export function patchUserDescription(userId, token, description, onSuccess, onError) {
  const updateJson = getJsonDataAttributes({ description });
  patchAuthJson(getUserPath(userId),
    token, updateJson, onSuccess, onError);
}
