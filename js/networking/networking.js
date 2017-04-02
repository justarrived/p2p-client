import { methods, createJsonPostRequest,
  createDeleteRequest, createAuthRequest,
  createAuthJsonRequest } from './request';

/*
Class with networking fetch methods
*/

function handleJsonStatusResponse(response, status) {
  // response.text() consumes the response stream
  // console.log(response.text());
  if (response.status === status) {
    return response.json();
  }
  throw new Error(`Response was ${response.status}, not ${status}`);
}

function handleJsonResponse(response) {
  return handleJsonStatusResponse(response, 200);
}

function handleNoContentResponse(response, onSuccess) {
  if (response.status === 204) {
    return onSuccess(response.text());
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

// GET url that requires Auth
export function getAuthJson(url, token, onSuccess, onError) {
  fetch(url, createAuthRequest(methods.GET, token))
    .then(response => handleJsonResponse(response))
    .then(responseJson => onSuccess(responseJson))
    .catch(error => onError(error))
    .done();
}

// POST JSON data to url and handle expectedStatus JSON response
export function postJsonStatus(url, json, expectedStatus, onSuccess, onError) {
  fetch(url, createJsonPostRequest(json))
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
  fetch(url, createDeleteRequest())
    .then(response => handleNoContentResponse(response, onSuccess))
    .catch(error => onError(error))
    .done();
}

// PATCH JSON data to url and handle response
export function patchAuthJson(url, token, json, onSuccess, onError) {
  fetch(url, createAuthJsonRequest(methods.PATCH, token, json))
    .then(response => handleJsonResponse(response))
    .then(responseJson => onSuccess(responseJson))
    .catch(error => onError(error))
    .done();
}
