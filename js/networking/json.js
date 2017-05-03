/*
Class with methods handling JSON objects
*/

export function createJsonDataAttributes(attributes) {
  return {
    data: {
      attributes,
    },
  };
}

export function getJsonDataAttribute(json, attribute) {
  return json.data.attributes[attribute];
}

export function parseDateInfo(apiFormatDate) {
  const dateRegex = /^\d{4}-\d{2}-\d{2}/;
  const timeRegex = /\d{2}:\d{2}/;
  return {
    date: (apiFormatDate.match(dateRegex) || ['missing'])[0],
    time: (apiFormatDate.match(timeRegex) || ['missing'])[0],
  };
}
