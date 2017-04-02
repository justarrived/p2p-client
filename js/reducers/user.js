import type { Action } from '../actions/types';
import { USER_TOKEN } from '../actions/user';

const initialState = {
  token: null,
};

// TODO use for networking
export default function (state = initialState, action : Action) {
  if (action.type === USER_TOKEN) {
    return {
      ...state,
      token: action.payload,
    };
  }
  return state;
}
