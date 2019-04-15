import _ from 'lodash';
import { normalize } from 'normalizr';

const API_ROOT = process.env.NODE_ENV === 'production'
  ? 'https://forkyfork.com'
  : 'https://localhost:5000';

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const callApi = (url, schema, method, query, body) => {

  const fullUrl = url.indexOf(API_ROOT) === -1
    ? API_ROOT + url
    : url;
  return fetch(fullUrl, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    query,
    body: JSON.stringify(body),
    mode: 'cors',
  })
    .then((res) => Object.assign({}, normalize(res, schema)))
    .catch((err) => Promise.reject(err));
};

export const CALL_API = 'CALL_API';

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default (store) => (next) => (action) => {
  const callAPI = action[CALL_API]

  // If not action of type 'CALL_API'; skip
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  // Make sure url, type, schema is provided
  const {
    type,
    schema,
    url,
    method,
    query,
    body,
  } = callAPI;
  if (!_.isString(type)) {
    throw new Error('Expected type to be string.');
  }
  if (!schema) {
    throw new Error('Expected schema to be provided.');
  }
  if (!_.isString(url)) {
    throw new Error('Must specify a string url.');
  }
  if (!_.includes(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], method)) {
    throw new Error('Expected method to be one of GET, POST, PUT, DELETE or PATCH.');
  }

  // Clean action
  const actionWith = (data) => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  }
  // Mark request as pending and make call
  next(actionWith({ type: `REQ:${type}:PENDING` }));
  return callApi(url, schema, method, query, body)
    .then((res) => next(actionWith({
      type: `REQ:${type}/SUCCESS`,
      response: res,
    })))
    .catch((err) => next(actionWith({
      type: `REQ:${type}/FAILURE`,
      error: err.message || 'Something bad happened'
    })));
};