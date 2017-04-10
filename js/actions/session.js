import type { Action } from './types';
import { signIn, signOut } from '../networking/auth';

export const SESSION_REQUEST = 'REQUEST_TOKEN';
export const SESSION_RECEIVE = 'RECEIVE_TOKEN';
export const SESSION_REMOVE = 'REMOVE_TOKEN';

// export const CREATE_USER = 'CREATE_USER';

function requestToken(user : string) : Action {
  return {
    type: SESSION_REQUEST,
    user,
  };
}

function receiveToken(userId : string, token : string, error) : Action {
  return {
    type: SESSION_RECEIVE,
    userId,
    token,
    error,
  };
}

function removeToken(removed : boolean, error) : Action {
  return {
    type: SESSION_REMOVE,
    removed,
    error,
  };
}

/* export function createUser(user):Action {
  return {
    type: CREATE_USER,
    user,
  };
}*/

export function requestSignIn(user, password) {
  // console.log(`requestSignIn, user: ${user}, password: ${password}`);
  return (dispatch) => {
    // console.log(`dispatch(requestToken(${user}))`);
    dispatch(requestToken(user));
    signIn(user, password,
      (responseJson) => {
        // console.log('dispatch(receiveToken(...))');
        dispatch(receiveToken(
          responseJson.data.attributes.user_id,
          responseJson.data.attributes.auth_token,
          null));
      },
      (error) => {
        // TODO handle errors
        console.warn(error);
        dispatch(receiveToken(null, null, error));
      },
    );
  };
}

export function requestSignOut(token : string) {
  return (dispatch) => {
    dispatch(removeToken(false, null));
    signOut(token,
      () => {
        dispatch(removeToken(true, null));
      },
      (error) => {
        // TODO handle errors
        console.warn(error);
        dispatch(removeToken(false, error));
      },
    );
  };
}
