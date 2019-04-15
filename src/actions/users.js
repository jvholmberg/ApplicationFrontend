import { schema } from 'normalizr'
import { CALL_API } from '../middleware/api'

const userSchema = new schema.Entity('users', {}, {});

export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => ({
  [CALL_API]: {
    type: FETCH_USERS,
    schema: [userSchema],
    url: `/api/users`,
    method: 'GET',
  },
});

export const POST_LOGIN = 'POST_LOGIN';
export const postLogin = (values) => {
  console.log(values)
  return ({
    [CALL_API]: {
      type: POST_LOGIN,
      schema: [userSchema],
      url: `/api/users/auth`,
      method: 'POST',
      body: values,
    },
  });
}

export const GET_LOGIN = 'GET_LOGIN';
export const fetchLogin = (refreshToken) => ({
  [CALL_API]: {
    type: GET_LOGIN,
    schema: [userSchema],
    url: `/api/users/auth/${refreshToken}`,
    method: 'GET',
  },
});