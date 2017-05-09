import { USER_P_REQUEST, USER_P_RECEIVE, USER_P_CREATE, USER_P_UPDATE } from '../actions/userProfile';
import { SESSION_REMOVE } from '../actions/session';

const initialState = {
  userId: null,
  userJson: null,
  userLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_P_REQUEST:
      // A request for the user has been sent
      return {
        ...state,
        userId: action.userId,
        userJson: null,
        userLoading: true,
        error: null,
      };
    case USER_P_RECEIVE:
      // Receive and save a user object
      return {
        ...state,
        userId: action.userId,
        userJson: action.userJson,
        userLoading: false,
        error: action.error,
      };
    case USER_P_CREATE:
      // Request for user to be created has been sent
      return {
        ...state,
        userId: null,
        userJson: null,
        userLoading: true,
        error: null,
      };
    case USER_P_UPDATE:
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
