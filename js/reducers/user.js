import type { Action } from '../actions/types';
import { USER_REQUEST, USER_RECEIVE, USER_CREATE, USER_UPDATE } from '../actions/user';

const initialState = {
  userId: null,
  userJson: null,
  userLoading: false,
  error: null,
};

export default function (state = initialState, action : Action) {
  if (action.type === USER_REQUEST) {
    return {
      ...state,
      userId: action.userId,
      userJson: null,
      userLoading: true,
      error: null,
    };
  }
  if (action.type === USER_RECEIVE) {
    return {
      ...state,
      userId: action.userId,
      userJson: action.userJson,
      userLoading: false,
      error: action.error,
    };
  }
  if (action.type === USER_CREATE) {
    return {
      ...state,
      userId: null,
      userJson: null,
      userLoading: true,
      error: null,
    };
  }
  if (action.type === USER_UPDATE) {
    return {
      ...state,
      userId: null,
      userJson: null,
      userLoading: true,
      error: null,
    };
  }
  return state;
}
