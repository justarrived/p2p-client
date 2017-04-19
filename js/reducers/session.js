import { SESSION_REQUEST, SESSION_RECEIVE, SESSION_REMOVE } from '../actions/session';

const initialState = {
  userId: null,
  token: null,
  sessionLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  // console.log(`previous session state:\n${JSON.stringify(state, null, 4)}`);
  if (action.type === SESSION_REQUEST) {
    return {
      ...state,
      userId: null,
      token: null,
      sessionLoading: true,
      error: null,
    };
  }
  if (action.type === SESSION_RECEIVE) {
    return {
      ...state,
      userId: action.userId,
      token: action.token,
      sessionLoading: false,
      error: action.error,
    };
  }
  if (action.type === SESSION_REMOVE) {
    return {
      ...state,
      userId: null,
      token: null,
      sessionLoading: !action.removed && (action.error === null),
      error: action.error,
    };
  }
  return state;
}
