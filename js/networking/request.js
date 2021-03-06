/*
Class with methods for creating requests
*/

// http request methods
export const methods = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

// Helper method creting 'method' request
export function createRequest(method) {
  return {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/vnd.api+json',
      'X-API-KEY-TRANSFORM': 'underscore',
    },
  };
}

// Helper method creting GET request with JSON body
export function createJsonGetRequest(json) {
  const request = createRequest(methods.GET);
  request.body = JSON.stringify(json);
  return request;
}

// Helper method creting POST request with body
export function createPostRequest(body) {
  const request = createRequest(methods.POST);
  request.body = body;
  return request;
}

// Helper method creting POST request with JSON body
export function createJsonPostRequest(json) {
  return createPostRequest(JSON.stringify(json));
}

// Helper method creting PATCH request with body
export function createPatchRequest(body) {
  const request = createRequest(methods.PATCH);
  request.body = body;
  return request;
}

// Helper method creting PATCH request with JSON body
export function createJsonPatchRequest(json) {
  return createPatchRequest(JSON.stringify(json));
}

// Helper method creting DELETE request
export function createDeleteRequest() {
  return createRequest(methods.DELETE);
}

// Helper method creating request with auth
export function createAuthRequest(method, token) {
  const request = createRequest(method);
  request.headers.Authorization = `Token token=${token}`;
  return request;
}

// Helper method creating request with auth and JSON body
export function createAuthJsonRequest(method, token, json) {
  const request = createAuthRequest(method, token);
  request.body = JSON.stringify(json);
  return request;
}
