import { postJson, deleteRequest } from './networking';
import { createJsonDataAttributes } from './json';
import BASE_URL from './url';
/*
Class with methods for handling auth against API.
*/

const SESSIONS_PATH = '/api/v1/users/sessions';

export function signIn(email, password, onSuccess, onError) {
  const requestJson = createJsonDataAttributes({
    email_or_phone: email,
    password });
  postJson(BASE_URL + SESSIONS_PATH, requestJson, onSuccess, onError);
}

export function signOut(token, onSuccess, onError) {
  // Delete the session token from the API
  deleteRequest(`${BASE_URL + SESSIONS_PATH}/${token}`, onSuccess, onError);
}
