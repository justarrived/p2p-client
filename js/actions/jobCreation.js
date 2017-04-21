
// Edit variables sent to API
export const JOBC_NAME = 'JOBC_NAME';
export const JOBC_DESCRIPTION = 'JOBC_DESCRIPTION';
export const JOBC_OWNER_ID = 'JOBC_OWNER_ID';
export const JOBC_CATEGORY = 'JOBC_CATEGORY';
export const JOBC_HOURS = 'JOBC_HOURS';
// export const JOBC_START_DATE = 'JOBC_START_DATE';
// export const JOBC_END_DATE = 'JOBC_END_DATE';
export const JOBC_LANGUAGE = 'JOBC_LANGUAGE';
export const JOBC_HOURLY_PAY = 'JOBC_HOURLY_PAY';
export const JOBC_SKILLS = 'JOBC_SKILLS';

// Edit helper variables
export const JOBC_H_START_DATE = 'JOBC_HIDDEN_STAR_DATE';
export const JOBC_H_START_TIME = 'JOBC_HIDDEN_STAR_TIME';
// export const JOBC_H_END_DATE = 'JOBC_HIDDEN_STAR_DATE';
// export const JOBC_H_END_TIME = 'JOBC_HIDDEN_STAR_DATE';

export const JOBC_CLEAR_DATA = 'JOBC_CLEAR_DATA';

export function setName(name) {
  return {
    type: JOBC_NAME,
    payload: name,
  };
}

export function setDescription(description) {
  return {
    type: JOBC_DESCRIPTION,
    payload: description,
  };
}

export function setOwner(userId) {
  return {
    type: JOBC_OWNER_ID,
    payload: userId,
  };
}

export function setCategory(cetegoryId) {
  return {
    type: JOBC_CATEGORY,
    payload: cetegoryId,
  };
}

export function setHours(hours) {
  return {
    type: JOBC_HOURS,
    payload: hours,
  };
}

export function setHStartDate(startDate) {
  return {
    type: JOBC_H_START_DATE,
    payload: startDate,
  };
}

export function setHStartTime(startTime) {
  return {
    type: JOBC_H_START_TIME,
    payload: startTime,
  };
}

/* export function setDate(startDate) {
  return {
    type: JOBC_START_DATE,
    payload: startDate,
  };
}*/
/* export function setEndDate(endDate) {
  return {
    type: JOBC_END_DATE,
    payload: endDate,
  };
}*/

export function setLanguage(languageId) {
  return {
    type: JOBC_LANGUAGE,
    payload: languageId,
  };
}

export function setPay(hourlyPayId) {
  return {
    type: JOBC_HOURLY_PAY,
    payload: hourlyPayId,
  };
}

export function setSkills(skillIds) {
  return {
    type: JOBC_SKILLS,
    payload: skillIds,
  };
}

export function clearData() {
  return {
    type: JOBC_CLEAR_DATA,
  };
}
