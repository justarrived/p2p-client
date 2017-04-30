export const ACCOUNT_FIRSTNAME = 'ACCOUNT_FIRSTNAME';
export const ACCOUNT_LASTNAME = 'ACCOUNT_LASTNAME';
export const ACCOUNT_ADDRESS = 'ACCOUNT_ADDRESS';
export const ACCOUNT_POSTCODE = 'ACCOUNT_POSTCODE';
export const ACCOUNT_POSTAREA = 'ACCOUNT_POSTAREA';
export const ACCOUNT_PHONENUMBER = 'ACCOUNT_PHONENUMBER';
export const ACCOUNT_EMAIL = 'ACCOUNT_EMAIL';
export const ACCOUNT_PASSWORD = 'ACCOUNT_PASSWORD';
export const TOGGLE_INPUT_DISABLED = 'TOGGLE_INPUT_DISABLED';
export const ACCOUNT_USER_AGREEMENT = 'ACCOUNT_USER_AGREEMENT';

export function changeFirstName(firstName) {
  return {
    type: ACCOUNT_FIRSTNAME,
    payload: firstName,
  };
}

export function changeLastName(LastName) {
  return {
    type: ACCOUNT_LASTNAME,
    payload: LastName,
  };
}

export function changeAddress(address) {
  return {
    type: ACCOUNT_ADDRESS,
    payload: address,
  };
}

export function changePostCode(postCode) {
  return {
    type: ACCOUNT_POSTCODE,
    payload: postCode,
  };
}

export function changePostArea(postArea) {
  return {
    type: ACCOUNT_POSTAREA,
    payload: postArea,
  };
}

export function changePhoneNumber(phoneNumber) {
  return {
    type: ACCOUNT_PHONENUMBER,
    payload: phoneNumber,
  };
}

export function changeEmail(email) {
  return {
    type: ACCOUNT_EMAIL,
    payload: email,
  };
}

export function changePassword(password) {
  return {
    type: ACCOUNT_PASSWORD,
    payload: password,
  };
}

export function toggleCheckBox() {
  return {
    type: ACCOUNT_USER_AGREEMENT,
  };
}

export function toggleInputDisabled() {
  return {
    type: TOOGLE_INPUT_DISABLED,
  };
}
