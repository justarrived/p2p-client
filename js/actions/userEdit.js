// Used to set all user attributes
export const USER_E_ATTRIBUTES = 'USER_EDIT_ATTRIBUTES';
// Used to set individual user attributes
export const USER_E_FIRSTNAME = 'USER_EDIT_FIRSTNAME';
export const USER_E_LASTNAME = 'USER_EDIT_LASTNAME';
export const USER_E_STREET = 'USER_EDIT_STREET';
export const USER_E_ZIP = 'USER_EDIT_ZIP';
export const USER_E_CITY = 'USER_EDIT_CITY';
export const USER_E_PHONE = 'USER_EDIT_PHONE';
export const USER_E_EMAIL = 'USER_EDIT_EMAIL';
export const USER_E_PASSWORD = 'USER_EDIT_PASSWORD';
export const USER_E_CONSENT = 'USER_EDIT_CONSENT';
// Helper values
export const USER_E_TOGGLE_INPUT = 'USER_EDIT_TOGGLE_INPUT';

export function setAttributes(attributes) {
  return {
    type: USER_E_ATTRIBUTES,
    payload: attributes,
  };
}

export function setFirstName(firstName) {
  return {
    type: USER_E_FIRSTNAME,
    payload: firstName,
  };
}

export function setLastName(LastName) {
  return {
    type: USER_E_LASTNAME,
    payload: LastName,
  };
}

export function setAddress(address) {
  return {
    type: USER_E_STREET,
    payload: address,
  };
}

export function setPostCode(postCode) {
  return {
    type: USER_E_ZIP,
    payload: postCode,
  };
}

export function setPostArea(postArea) {
  return {
    type: USER_E_CITY,
    payload: postArea,
  };
}

export function setPhoneNumber(phoneNumber) {
  return {
    type: USER_E_PHONE,
    payload: phoneNumber,
  };
}

export function setEmail(email) {
  return {
    type: USER_E_EMAIL,
    payload: email,
  };
}

export function setPassword(password) {
  return {
    type: USER_E_PASSWORD,
    payload: password,
  };
}

export function toggleCheckBox() {
  return {
    type: USER_E_CONSENT,
  };
}

export function toggleInputDisabled() {
  return {
    type: USER_E_TOGGLE_INPUT,
  };
}
