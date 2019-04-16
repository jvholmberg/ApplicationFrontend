import _ from 'lodash';
import {
  FETCH_USERS,
  POST_LOGIN,
  GET_LOGIN,
} from '../actions';

export const reqPostLogin = (state) => _.get(state, `requests.${POST_LOGIN}`);
export const resPostLogin = (state) => _.get(state, `requests.${POST_LOGIN}.response`);
export const errPostLogin = (state) => _.get(state, `requests.${POST_LOGIN}.error`);