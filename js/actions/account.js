import type { Action } from './types';

export const ACCOUNT_FIRSTNAME = 'ACCOUNT_FIRSTNAME';
export const ACCOUNT_LASTNAME = 'ACCOUNT_LASTNAME';
export const ACCOUNT_ADDRESS = 'ACCOUNT_ADDRESS';
export const ACCOUNT_POSTCODE = 'ACCOUNT_POSTCODE';
export const ACCOUNT_POSTAREA = 'ACCOUNT_POSTAREA';
export const ACCOUNT_PHONENUMBER = 'ACCOUNT_PHONENUMBER';
export const ACCOUNT_EMAIL = 'ACCOUNT_EMAIL';
export const ACCOUNT_PASSWORD = 'ACCOUNT_PASSWORD';
export const TOOGLE_INPUT_DISABLED = 'TOOGLE_INPUT_DISABLED';
export const ACCOUNT_USER_AGREEMENT = 'ACCOUNT_USER_AGREEMENT';

export function changeFirstName(firstName:string):Action {
  return {
    type: ACCOUNT_FIRSTNAME,
    payload: firstName,
  };
}

export function changeLastName(LastName:string):Action {
  return {
    type: ACCOUNT_LASTNAME,
    payload: LastName,
  };
}

export function changeAddress(address:string):Action {
  return {
    type: ACCOUNT_ADDRESS,
    payload: address,
  };
}

export function changePostCode(postCode:string):Action {
  return {
    type: ACCOUNT_POSTCODE,
    payload: postCode,
  };
}

export function changePostArea(postArea:string):Action {
  return {
    type: ACCOUNT_POSTAREA,
    payload: postArea,
  };
}

export function changePhoneNumber(phoneNumber:string):Action {
  return {
    type: ACCOUNT_PHONENUMBER,
    payload: phoneNumber,
  };
}

export function changeEmail(email:string):Action {
  return {
    type: ACCOUNT_EMAIL,
    payload: email,
  };
}

export function changePassword(password:string):Action {
  return {
    type: ACCOUNT_PASSWORD,
    payload: password,
  };
}

export function toggleCheckBox():Action {
  return {
    type: ACCOUNT_USER_AGREEMENT,
  };
}

export function toggleInputDisabled():Action {
  return {
    type: TOOGLE_INPUT_DISABLED,
  };
}
