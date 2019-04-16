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
