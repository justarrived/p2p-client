import { postJson, deleteRequest } from './networking';
/*
Class with methods for handling auth against API.
*/

const BASE_URL = 'https://sandbox-api.justarrived.xyz';
const USERS_PATH = '/api/v1/users';
const SESSIONS_PATH = '/api/v1/users/sessions';

function getJsonDataAttributes(attributes) {
  return {
    data: {
      attributes,
    },
  };
}

export function signUp(email, password, onSuccess, onError) {
  const requestJson = getJsonDataAttributes({
    email,
    password,
    consent: true,
    system_language_id: 38,
    first_name: 'SomeName',
    last_name: 'SomeLastName' });
  postJson(BASE_URL + USERS_PATH,
    requestJson, onSuccess, onError);
}

function saveToken(json, onSuccess) {
  // TODO save token in redux here? Or refactor to use redux
  onSuccess(json);
}

export function signIn(email, password, onSuccess, onError) {
  const requestJson = getJsonDataAttributes({
    email_or_phone: email,
    password });
  postJson(BASE_URL + SESSIONS_PATH,
    requestJson, responseJson => saveToken(responseJson, onSuccess), onError);
}

function deleteToken(response, onSuccess) {
  // TODO remove token in redux here? Or refactor to use redux
  onSuccess(response);
}

export function signOut(token, onSuccess, onError) {
  // Delete the session token
  deleteRequest(`${BASE_URL + SESSIONS_PATH}/${token}`,
    response => deleteToken(response, onSuccess),
    onError);
}
