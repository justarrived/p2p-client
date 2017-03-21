import type { Action } from './types';

export const ADD_LANGUAGE = 'ADD_LANGUAGE';
export const REMOVE_LANGUAGE = 'REMOVE_LANGUAGE';

export function addLanguage(id:string):Action {
  return {
    type: ADD_LANGUAGE,
    payload: id,
  };
}

export function removeLanguage(id:string):Action {
  return {
    type: REMOVE_LANGUAGE,
    payload: id,
  };
}
