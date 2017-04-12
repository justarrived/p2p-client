import type { Action } from './types';
import { signIn, signOut } from '../networking/auth';

export const SESSION_REQUEST = 'REQUEST_TOKEN';
export const SESSION_RECEIVE = 'RECEIVE_TOKEN';
export const SESSION_REMOVE = 'REMOVE_TOKEN';

// Used to set state waiting for token
function requestToken(user : string) : Action {
  return {
    type: SESSION_REQUEST,
    user,
  };
}

// Used to set state with token
function receiveToken(userId : number, token : string, error) : Action {
  return {
    type: SESSION_RECEIVE,
    userId,
    token,
    error,
  };
}

// Used to set state with no token
function removeToken(removed : boolean, error) : Action {
  return {
    type: SESSION_REMOVE,
    removed,
    error,
  };
}

export function requestSignIn(user, password) {
  // dispatch = method that sends state to store
  return (dispatch) => {
    // dispatch that token has been requested
    dispatch(requestToken(user));
    // request the token
    signIn(user, password,
      (responseJson) => {
        // dispatch the received token
        dispatch(receiveToken(
          responseJson.data.attributes.user_id,
          responseJson.data.attributes.auth_token,
          null));
      },
      (error) => {
        // Dispatch the received error
        dispatch(receiveToken(null, null, error));
      },
    );
  };
}

// Sign out the user
export function requestSignOut(token : string) {
  return (dispatch) => {
    // Remove local token
    dispatch(removeToken(false, null));
    // Remove token from API
    signOut(token,
      () => {
        dispatch(removeToken(true, null));
      },
      (error) => {
        dispatch(removeToken(false, error));
      },
    );
  };
}
