import { getJson, postJson } from './networking';

const BASE_URL = 'https://sandbox-api.justarrived.xyz';
const USER_ENDPOINT = '/api/v1/users';
const SESSIONS = '/api/v1/users/sessions';

export async function signUp(email, password, onSuccess, onError) {
  const url = BASE_URL + USER_ENDPOINT;
  await postJson(url,
  { Email: email, Password: password },
  onSuccess, onError);
}

export async function signIn(email, password, onSuccess, onError) {
  await postJson(BASE_URL + SESSIONS,
    { data: {
      attributes: {
        email_or_phone: email,
        password,
      },
    },
    },
  onSuccess, onError);
}

export async function signOut(onSuccess, onError) {
  await postJson(BASE_URL + USER_ENDPOINT,
  { Operation: 'sign out' },
  onSuccess, onError);
}
