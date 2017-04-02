import type { Action } from './types';

export const USER_TOKEN = 'USER_TOKEN';

// TODO use for networking
export function updateToken(token:string):Action {
  return {
    type: USER_TOKEN,
    payload: token,
  };
}
