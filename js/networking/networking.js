/*
Class containing basic networking methods
*/

/* global fetch b:true*/

// GET url
export function get(url, handleResponse, onSuccess, onError) {
  fetch(url)
    .then(response => handleResponse(response))
    .then(responseJson => onSuccess(responseJson))
    .catch(error => onError(error))
    .done();
}

// GET json data from url
export function getJson(url, onSuccess, onError) {
  get(url,
    (response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error('Response was not 200 OK');
    },
    responseJson => onSuccess(responseJson),
    error => onError(error));
}

// POST JSON data to url and handle JSON response
export function postJson(url, json, onSuccess, onError) {
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(json),
  })
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    console.warn(response.json().toString());
    throw new Error(`Response was ${response.status}, not 200 OK`);
  })
  .then(responseJson => onSuccess(responseJson))
  .catch(error => onError(error))
  .done();
}
