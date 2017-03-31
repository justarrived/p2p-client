import { getJson, postJson, postJsonStatus } from './networking';

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
    first_name: 'meName',
    last_name: 'meLastName' });
  postJson(BASE_URL + USERS_PATH,
    requestJson, onSuccess, onError);
}

export function signIn(email, password, onSuccess, onError) {
  const requestJson = getJsonDataAttributes({
    email_or_phone: email,
    password });
  postJson(BASE_URL + SESSIONS_PATH,
    requestJson, onSuccess, onError);
}

export async function signOut(onSuccess, onError) {
  console.warn('signOut not implemented');
  onSuccess();
}
