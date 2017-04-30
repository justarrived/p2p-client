import { SESSION_REQUEST, SESSION_RECEIVE, SESSION_REMOVE } from '../actions/session';

const initialState = {
  userId: null,
  token: null,
  sessionLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SESSION_REQUEST:
      return {
        ...state,
        userId: null,
        token: null,
        sessionLoading: true,
        error: null,
      };
    case SESSION_RECEIVE:
      return {
        ...state,
        userId: action.userId,
        token: action.token,
        sessionLoading: false,
        error: action.error,
      };
    case SESSION_REMOVE:
      return {
        ...state,
        userId: null,
        token: null,
        sessionLoading: !action.removed && (action.error === null),
        error: action.error,
      };
    default:
      return state;
  }
}
