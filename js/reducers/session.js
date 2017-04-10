import type { Action } from '../actions/types';
import { SESSION_REQUEST, SESSION_RECEIVE, SESSION_REMOVE } from '../actions/session';

const initialState = {
  userId: null,
  token: null,
  loading: false,
  error: null,
};

export default function (state = initialState, action : Action) {
  if (action.type === SESSION_REQUEST) {
    // console.log('i reducer name');
    return {
      ...state,
      userId: null,
      token: null,
      loading: true,
      error: null,
    };
  }
  if (action.type === SESSION_RECEIVE) {
    // console.log('i reducer age');
    return {
      ...state,
      userId: action.userId,
      token: action.token,
      loading: false,
      error: action.error,
    };
  }
  if (action.type === SESSION_REMOVE) {
    // console.log('i reducer age');
    return {
      ...state,
      userId: null,
      token: null,
      loading: !action.removed || action.error != null,
      error: action.error,
    };
  }
  return state;
}
