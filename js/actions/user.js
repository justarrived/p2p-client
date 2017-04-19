import { getUser, postUser, patchUser } from '../networking/user';

export const USER_REQUEST = 'USER_REQUEST';
export const USER_RECEIVE = 'USER_RECEIVE';
export const USER_CREATE = 'USER_CREATE';
export const USER_UPDATE = 'USER_UPDATE';

// Used to set state waiting for user
function requestUser(userId) {
  return {
    type: USER_REQUEST,
    userId,
  };
}

// Used to set state with user
function receiveUser(userId, userJson, error) {
  return {
    type: USER_RECEIVE,
    userId,
    userJson,
    error,
  };
}

// Used to set state with new user
function createUser() {
  return {
    type: USER_CREATE,
  };
}

// Used to set state with updated user
function updateUser(userId) {
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
export function requestCreateUser(requestJson) {
  return (dispatch) => {
    dispatch(createUser());
    postUser(requestJson,
      (responseJson) => {
        dispatch(receiveUser(
          responseJson.data.id,
          responseJson,
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
