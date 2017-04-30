import { USER_REQUEST, USER_RECEIVE, USER_CREATE, USER_UPDATE } from '../actions/user';
import { SESSION_REMOVE } from '../actions/session';

const initialState = {
  userId: null,
  userJson: null,
  userLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_REQUEST:
      // A request for the user has been sent
      return {
        ...state,
        userId: action.userId,
        userJson: null,
        userLoading: true,
        error: null,
      };
    case USER_RECEIVE:
      // Receive and save a user object
      return {
        ...state,
        userId: action.userId,
        userJson: action.userJson,
        userLoading: false,
        error: action.error,
      };
    case USER_CREATE:
      // Request for user to be created has been sent
      return {
        ...state,
        userId: null,
        userJson: null,
        userLoading: true,
        error: null,
      };
    case USER_UPDATE:
      // Request for user to be updated has been sent
      return {
        ...state,
        userLoading: true,
        error: null,
      };
    case SESSION_REMOVE:
      // Remove local data when user signs out
      return initialState;
    default:
      return state;
  }
}
