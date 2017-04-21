
// Edit variables sent to API
export const JOBC_NAME = 'JOBC_NAME';
export const JOBC_DESCRIPTION = 'JOBC_DESCRIPTION';
export const JOBC_OWNER_ID = 'JOBC_OWNER_ID';
export const JOBC_CATEGORY = 'JOBC_CATEGORY';
export const JOBC_HOURS = 'JOBC_HOURS';
export const JOBC_LANGUAGE = 'JOBC_LANGUAGE';
export const JOBC_HOURLY_PAY = 'JOBC_HOURLY_PAY';
export const JOBC_SKILLS = 'JOBC_SKILLS';
export const JOBC_CITY = 'JOBC_CITY';

// Edit helper variables
export const JOBC_H_START_DATE = 'JOBC_HIDDEN_STAR_DATE';
export const JOBC_H_START_TIME = 'JOBC_HIDDEN_STAR_TIME';
// export const JOBC_H_END_DATE = 'JOBC_HIDDEN_STAR_DATE';
// export const JOBC_H_END_TIME = 'JOBC_HIDDEN_STAR_DATE';
export const JOBC_H_ADDRESS_STREET = 'JOBC_HIDDEN_ADDRESS_STREET';
export const JOBC_H_ADDRESS_ZIP = 'JOBC_HIDDEN_ADDRESS_ZIP';

export const JOBC_CLEAR_DATA = 'JOBC_CLEAR_DATA';

function getDispatchAction(type, payload) {
  return {
    type,
    payload,
  };
}

export function setName(name) {
  return getDispatchAction(JOBC_NAME, name);
}

export function setDescription(description) {
  return getDispatchAction(JOBC_DESCRIPTION, description);
}

export function setOwner(userId) {
  return getDispatchAction(JOBC_OWNER_ID, userId);
}

export function setCategory(cetegoryId) {
  return getDispatchAction(JOBC_CATEGORY, cetegoryId);
}

export function setHours(hours) {
  return getDispatchAction(JOBC_HOURS, hours);
}

export function setHStartDate(startDate) {
  return getDispatchAction(JOBC_H_START_DATE, startDate);
}

export function setHStartTime(startTime) {
  return getDispatchAction(JOBC_H_START_TIME, startTime);
}

export function setLanguage(languageId) {
  return getDispatchAction(JOBC_LANGUAGE, languageId);
}

export function setPay(hourlyPayId) {
  return getDispatchAction(JOBC_HOURLY_PAY, hourlyPayId);
}

export function setSkills(skillIds) {
  return getDispatchAction(JOBC_SKILLS, skillIds);
}

export function setCity(city) {
  return getDispatchAction(JOBC_CITY, city);
}

export function setHStreet(street) {
  return getDispatchAction(JOBC_H_ADDRESS_STREET, street);
}

export function setHZip(zip) {
  return getDispatchAction(JOBC_H_ADDRESS_ZIP, zip);
}

export function clearData() {
  return {
    type: JOBC_CLEAR_DATA,
  };
}
