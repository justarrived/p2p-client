export const ACCOUNT_FIRSTNAME = 'ACCOUNT_FIRSTNAME';
export const ACCOUNT_LASTNAME = 'ACCOUNT_LASTNAME';
export const ACCOUNT_ADDRESS = 'ACCOUNT_ADDRESS';
export const ACCOUNT_POSTCODE = 'ACCOUNT_POSTCODE';
export const ACCOUNT_POSTAREA = 'ACCOUNT_POSTAREA';
export const ACCOUNT_PHONENUMBER = 'ACCOUNT_PHONENUMBER';
export const ACCOUNT_EMAIL = 'ACCOUNT_EMAIL';
export const ACCOUNT_PASSWORD = 'ACCOUNT_PASSWORD';
export const ACCOUNT_USER_AGREEMENT = 'ACCOUNT_USER_AGREEMENT';

export const TOGGLE_INPUT_DISABLED = 'TOGGLE_INPUT_DISABLED';

export function setFirstName(firstName) {
  return {
    type: ACCOUNT_FIRSTNAME,
    payload: firstName,
  };
}

export function setLastName(LastName) {
  return {
    type: ACCOUNT_LASTNAME,
    payload: LastName,
  };
}

export function setAddress(address) {
  return {
    type: ACCOUNT_ADDRESS,
    payload: address,
  };
}

export function setPostCode(postCode) {
  return {
    type: ACCOUNT_POSTCODE,
    payload: postCode,
  };
}

export function setPostArea(postArea) {
  return {
    type: ACCOUNT_POSTAREA,
    payload: postArea,
  };
}

export function setPhoneNumber(phoneNumber) {
  return {
    type: ACCOUNT_PHONENUMBER,
    payload: phoneNumber,
  };
}

export function setEmail(email) {
  return {
    type: ACCOUNT_EMAIL,
    payload: email,
  };
}

export function setPassword(password) {
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
    type: TOGGLE_INPUT_DISABLED,
  };
}
