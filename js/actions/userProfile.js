import { getUser, postUser, patchUser } from '../networking/user';
import { setAttributes } from './userEdit';

export const USER_P_REQUEST = 'USER_P_REQUEST';
export const USER_P_RECEIVE = 'USER_P_RECEIVE';
export const USER_P_CREATE = 'USER_P_CREATE';
export const USER_P_UPDATE = 'USER_P_UPDATE';

// Used to set state waiting for user
function requestUser(userId) {
  return {
    type: USER_P_REQUEST,
    userId,
  };
}

// Used to set state with user
function receiveUser(userId, userJson, error) {
  return {
    type: USER_P_RECEIVE,
    userId,
    userJson,
    error,
  };
}

// Used to set state with new user
function createUser() {
  return {
    type: USER_P_CREATE,
  };
}

// Used to set state with updated user
function updateUser(userId) {
  return {
    type: USER_P_UPDATE,
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
        dispatch(setAttributes(userJson.data.attributes));
      },
      (error) => {
        // Dispatch the received error
        dispatch(receiveUser(null, null, error));
      },
    );
  };
}

// Create a new user
export function requestCreateUser(requestJson) {
  return (dispatch) => {
    dispatch(createUser());
    postUser(requestJson,
      (userJson) => {
        dispatch(receiveUser(
          userJson.data.id,
          userJson,
          null));
        dispatch(setAttributes(userJson.data.attributes));
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
        dispatch(setAttributes(userJson.data.attributes));
      },
      (error) => {
        dispatch(receiveUser(null, null, error));
      },
    );
  };
}
