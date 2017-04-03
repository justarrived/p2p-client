import { postJson, deleteRequest } from './networking';
import { createJsonDataAttributes } from './json';
/*
Class with methods for handling auth against API.
*/

const BASE_URL = 'https://sandbox-api.justarrived.xyz';
const USERS_PATH = '/api/v1/users';
const SESSIONS_PATH = '/api/v1/users/sessions';

export function signUp(email, password, onSuccess, onError) {
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

export function signIn(email, password, onSuccess, onError) {
  const requestJson = createJsonDataAttributes({
    email_or_phone: email,
    password });
  postJson(BASE_URL + SESSIONS_PATH,
    requestJson, onSuccess, onError);
}

export function signOut(token, onSuccess, onError) {
  // Delete the session token from the API
  deleteRequest(`${BASE_URL + SESSIONS_PATH}/${token}`,
    onSuccess, onError);
}
