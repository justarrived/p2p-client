export const CHANGE_NAME = 'CHANGE_NAME';
export const INCREASE_AGE = 'INCREASE_AGE';
export const DECREASE_AGE = 'DECREASE_AGE';

export function changeName(name) {
  return {
    type: CHANGE_NAME,
    payload: name,
  };
}

export function increaseAge() {
  return {
    type: INCREASE_AGE,
  };
}

export function decreaseAge() {
  return {
    type: DECREASE_AGE,
  };
}
