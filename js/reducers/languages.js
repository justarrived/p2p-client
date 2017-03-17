import type { Action } from '../actions/types';
import { ADD_LANGUAGE, REMOVE_LANGUAGE } from '../actions/languages';

const initialState = {
  lang: [13, 2, 12, 17],
};

export default function (state : State = initialState, action : Action) : State {
  if (action.type === REMOVE_LANGUAGE) {
    // console.log('i reducer name');
    state.lang.splice(state.lang.indexOf(action.payload), 1);
    return state;
  }
  if (action.type === ADD_LANGUAGE) {
    // console.log(`push lang ${action.payload}`);
    return {
      ...state,
      lang: [...state.lang, action.payload],
    };
  }
  return state;
}
