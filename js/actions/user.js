import type { Action } from './types';
import { getUser, postUser, patchUser } from '../networking/user';

export const USER_REQUEST = 'USER_REQUEST';
export const USER_RECEIVE = 'USER_RECEIVE';
export const USER_CREATE = 'USER_CREATE';
export const USER_UPDATE = 'USER_CREATE';

// Used to set state waiting for user
function requestUser(userId : string) : Action {
  return {
    type: USER_REQUEST,
    userId,
  };
}

// Used to set state with user
function receiveUser(userId, userJson, error) : Action {
  return {
    type: USER_RECEIVE,
    userId,
    userJson,
    error,
  };
}

// Used to set state with new user
function createUser() : Action {
  return {
    type: USER_CREATE,
  };
}

// Used to set state with updated user
function updateUser(userId) : Action {
  return {
    type: USER_UPDATE,
    userId,
  };
}

// Get existing user from API
export function requestGetUser(userId, token) {
  // dispatch = method that sends state to store
  return (dispatch) => {
    // dispatch user token has been requested
    dispatch(requestUser(userId));
    // request the user
    getUser(userId, token,
      (userJson) => {
        // dispatch the received user
        dispatch(receiveUser(
          userJson.data.id,
          userJson,
          null));
      },
      (error) => {
        // Dispatch the received error
        dispatch(receiveUser(null, error));
      },
    );
  };
}

// Create a new user
export function requestCreateUser(email, password) {
  return (dispatch) => {
    dispatch(createUser());
    postUser(email, password,
      (userJson) => {
        dispatch(receiveUser(
          userJson.data.id,
          userJson,
          null));
      },
      (error) => {
        dispatch(receiveUser(null, null, error));
      },
    );
  };
}

// update existing user
export function requestPatchUser(userId, token, json) {
  return (dispatch) => {
    dispatch(updateUser(userId));
    patchUser(userId, token, json,
      (userJson) => {
        dispatch(receiveUser(
          userJson.data.id,
          userJson,
          null));
      },
      (error) => {
        dispatch(receiveUser(null, null, error));
      },
    );
  };
}
