import { getJson, patchJson } from './networking';

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
  console.log(`get User: ${BASE_URL + USERS_PATH}/${userId}?auth_token=${token}`);
  getJson(`${BASE_URL + USERS_PATH}/${userId}?auth_token=${token}`,
    (json) => {
      console.log(`JSON User: ${JSON.stringify(json)}`);
      onSuccess(json);
    },
    onError);
}

export function patchUserDescription(userId, token, description, onSuccess, onError) {
  const requestJson = getJsonDataAttributes({ description });
  patchJson(`${BASE_URL + USERS_PATH}/${userId}?auth_token=${token}`,
    requestJson, onSuccess, onError);
}
