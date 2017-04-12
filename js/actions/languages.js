export const ADD_LANGUAGE = 'ADD_LANGUAGE';
export const REMOVE_LANGUAGE = 'REMOVE_LANGUAGE';

export function addLanguage(id) {
  return {
    type: ADD_LANGUAGE,
    payload: id,
  };
}

export function removeLanguage(id) {
  return {
    type: REMOVE_LANGUAGE,
    payload: id,
  };
}
