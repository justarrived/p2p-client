import type { Action } from './types';

export const ADD_LANGUAGE = 'ADD_LANGUAGE';
export const REMOVE_LANGUAGE = 'REMOVE_LANGUAGE';

export function addLanguage(name:string):Action {
  return {
    type: ADD_LANGUAGE,
    payload: name,
  };
}

export function removeLanguage(name:string):Action {
  return {
    type: REMOVE_LANGUAGE,
    payload: name,
  };
}
