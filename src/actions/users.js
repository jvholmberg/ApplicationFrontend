import { CALL_API } from '../middleware/api'

/**
 * Login user
 */
export const GET_JWT = 'GET_JWT';
export const getJwt = (values) => ({
  [CALL_API]: {
    type: GET_JWT,
    url: `/api/users/auth`,
    method: 'POST',
    body: values,
  },
});

/**
 * Refresh jwt-token
 */
export const REFRESH_JWT = 'REFRESH_JWT';
export const refreshJwt = (refreshToken) => ({
  [CALL_API]: {
    type: REFRESH_JWT,
    url: `/api/users/auth/${refreshToken}`,
    method: 'GET',
    restricted: true,
  },
});

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
 * Register user
 */
export const REGISTER_USER = 'REGISTER_USER';
export const register = (values) => ({
  [CALL_API]: {
    type: REGISTER_USER,
    url: `/api/users`,
    method: 'POST',
    body: values,
  },
});
