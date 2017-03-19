import type { Action } from '../actions/types';
import { ADD_LANGUAGE, REMOVE_LANGUAGE } from '../actions/languages';

const initialState = {
  lang: [6, 16, 17],
};

export default function (state : State = initialState, action : Action) : State {
  if (action.type === REMOVE_LANGUAGE) {
    // console.log(`splice lang ${action.payload}`);
    state.lang.splice(state.lang.indexOf(action.payload), 1);
    // Have to create a new state in order for components to update correctly
    return {
      ...state,
      lang: [...state.lang],
    };
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
