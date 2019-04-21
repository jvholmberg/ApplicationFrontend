import { CALL_API } from '../middleware/api'

/**
 * Login user
 */
export const GET_JWT = 'GET_JWT';
export const getJwt = (values, force) => ({
  [CALL_API]: {
    type: GET_JWT,
    url: `/api/users/auth`,
    method: 'POST',
    body: values,
    withForce: force,
  },
});

/**
 * Validate jwt-token
 */
export const VALIDATE_JWT = 'VALIDATE_JWT';
export const validateJwt = (force) => ({
  [CALL_API]: {
    type: VALIDATE_JWT,
    url: `/api/users/auth`,
    method: 'GET',
    restricted: true,
    withForce: force,
  },
});

/**
 * Refresh jwt-token
 */
export const REFRESH_JWT = 'REFRESH_JWT';
export const refreshJwt = (refreshToken, force) => ({
  [CALL_API]: {
    type: REFRESH_JWT,
    url: `/api/users/auth/${refreshToken}`,
    method: 'GET',
    restricted: true,
    withForce: force,
  },
});

/**
 * Destroy jwt-token
 */
export const DESTROY_JWT = 'DESTROY_JWT';
export const destroyJwt = (force) => ({
  [CALL_API]: {
    type: DESTROY_JWT,
    url: `/api/users/auth`,
    method: 'DELETE',
    restricted: true,
    withForce: force,
  },
});

/**
 * Get all users
 */
export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = (force) => ({
  [CALL_API]: {
    type: FETCH_USERS,
    url: `/api/users`,
    method: 'GET',
    restricted: true,
    withForce: force,
  },
});

/**
 * Register user
 */
export const REGISTER_USER = 'REGISTER_USER';
export const register = (values, force) => ({
  [CALL_API]: {
    type: REGISTER_USER,
    url: `/api/users`,
    method: 'POST',
    body: values,
    withForce: force,
  },
});
