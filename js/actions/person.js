
import type { Action } from './types';

export const CHANGE_NAME = 'CHANGE_NAME';
export const INCREASE_AGE = 'INCREASE_AGE';
export const DECREASE_AGE = 'DECREASE_AGE';



export function changeName(name:string):Action {
  return {
    type: CHANGE_NAME,
    payload: name,
  };
}

export function increaseAge():Action {
  return {
    type: INCREASE_AGE,
  };
}

export function decreaseAge():Action {
  return {
    type: DECREASE_AGE,
  };
}
