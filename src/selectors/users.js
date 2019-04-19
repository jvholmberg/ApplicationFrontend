import _ from 'lodash';
import {
  FETCH_USERS,
  GET_JWT,
  REFRESH_JWT,
  VALIDATE_JWT,
} from '../actions';

export const reqGetJwt = (state) => _.get(state, `requests.${GET_JWT}`, {});
export const resGetJwt = (state) => _.get(state, `requests.${GET_JWT}.response`);
export const errGetJwt = (state) => _.get(state, `requests.${GET_JWT}.error`);

export const reqRefreshJwt = (state) => _.get(state, `requests.${REFRESH_JWT}`, {});
export const resRefreshJwt = (state) => _.get(state, `requests.${REFRESH_JWT}.response`);
export const errRefreshJwt = (state) => _.get(state, `requests.${REFRESH_JWT}.error`);

export const reqValidateJwt = (state) => _.get(state, `requests.${VALIDATE_JWT}`, {});
export const resValidateJwt = (state) => _.get(state, `requests.${VALIDATE_JWT}.response`);
export const errValidateJwt = (state) => _.get(state, `requests.${VALIDATE_JWT}.error`);