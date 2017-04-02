/*
Class containing basic networking methods
*/

// Helper method creting POST request with JSON body
function getJsonPostRequest(json) {
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(json),
  };
}

// Helper method creting DELETE request without body
function getDeleteRequest() {
  return {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
}

function handleJsonStatusResponse(response, status) {
  // response.text() consumes the response stream
  // console.log(response.text());
  if (response.status === status) {
    return response.json();
  }
  throw new Error(`Response was ${response.status}, not ${status}`);
}

function handleJsonResponse(response) {
  handleJsonStatusResponse(response, 200);
}

function handleNoContentResponse(response, onSuccess) {
  if (response.status === 204) {
    return onSuccess(response);
  }
  throw new Error(`Response was ${response.status}, not 204`);
}

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
    response => handleJsonResponse(response),
    responseJson => onSuccess(responseJson),
    error => onError(error));
}

// POST JSON data to url and handle expectedStatus JSON response
export function postJsonStatus(url, json, expectedStatus, onSuccess, onError) {
  fetch(url, getJsonPostRequest(json))
    .then(response => handleJsonStatusResponse(response, expectedStatus))
    .then(responseJson => onSuccess(responseJson))
    .catch(error => onError(error))
    .done();
}

// POST JSON data to url and handle 201 JSON response
export function postJson(url, json, onSuccess, onError) {
  postJsonStatus(url, json, 201, onSuccess, onError);
}

// DELETE url and handle 204 response
export function deleteRequest(url, onSuccess, onError) {
  fetch(url, getDeleteRequest())
    .then(response => handleNoContentResponse(response, onSuccess))
    .catch(error => onError(error))
    .done();
}
