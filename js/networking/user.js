import { getJson, patchJson } from './networking';
/*
Class with methods for manipulating user info against API.
*/

const BASE_URL = 'https://sandbox-api.justarrived.xyz';
const USERS_PATH = '/api/v1/users';

function getJsonDataAttributes(attributes) {
  return {
    data: {
      attributes,
    },
  };
}

export function getUser(userId, token, onSuccess, onError) {
  getJson(`${BASE_URL + USERS_PATH}/${userId}?auth_token=${token}`,
    onSuccess, onError);
}

export function patchUserDescription(userId, token, description, onSuccess, onError) {
  const requestJson = getJsonDataAttributes({ description });
  patchJson(`${BASE_URL + USERS_PATH}/${userId}?auth_token=${token}`,
    requestJson, onSuccess, onError);
}
