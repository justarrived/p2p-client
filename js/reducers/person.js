import { CHANGE_NAME, INCREASE_AGE, DECREASE_AGE } from '../actions/person';

const initialState = {
  name: 'Bill',
  age: 200,
  lang: ['Svenska', 'English'],
};

export default function (state = initialState, action) {
  if (action.type === CHANGE_NAME) {
    // console.log('i reducer name');
    return {
      ...state,
      name: action.payload,
    };
  }
  if (action.type === INCREASE_AGE) {
    // console.log('i reducer age');
    return {
      ...state,
      age: state.age + 1,
    };
  }
  if (action.type === DECREASE_AGE) {
    // console.log('i reducer age');
    return {
      ...state,
      age: state.age - 1,
    };
  }
  return state;
}
