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
