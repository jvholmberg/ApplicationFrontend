import { CALL_API } from '../middleware/api'

/**
 * Get all users
 */
export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => ({
  [CALL_API]: {
    type: FETCH_USERS,
    url: `/api/users`,
    method: 'GET',
    restricted: true,
  },
});

/**
 * Login user
 */
export const POST_LOGIN = 'POST_LOGIN';
export const postLogin = (values) => ({
  [CALL_API]: {
    type: POST_LOGIN,
    url: `/api/users/auth`,
    method: 'POST',
    body: values,
  },
});

/**
 * Refresh jwt-token
 */
export const GET_LOGIN = 'GET_LOGIN';
export const fetchLogin = (refreshToken) => ({
  [CALL_API]: {
    type: GET_LOGIN,
    url: `/api/users/auth/${refreshToken}`,
    method: 'GET',
    restricted: true,
  },
});