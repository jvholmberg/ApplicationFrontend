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