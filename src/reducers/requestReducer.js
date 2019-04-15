import _ from 'lodash';

const isRequestAction = (type) => _.startsWith(type, 'REQ:');

const getRequestStatus = (type) => _.split(type, '/')[1];

const getActionType = (type) => {
  const stageOne = _.split(type, ':')[1];
  const stageTwo = _.split(stageOne, '/')[0];
  return stageTwo;
};

export const defaultState = {

};

export default (state = defaultState, action) => {

  // Not a request action
  if (!isRequestAction(action.type)) {
    return state;
  }

  const requestStatus = getRequestStatus(action.type);
  const actionType = getActionType(action.type);
  console.log(action);
  switch (requestStatus) {
    case 'PENDING':
      return Object.assign({}, state, {
        [actionType]: {
          pending: true,
          success: false,
          failed: false,
        },
      });
    case 'SUCCESS':
      return Object.assign({}, state, {
        [actionType]: {
          pending: false,
          success: true,
          failed: false,
          response: action.response,
        },
      });
    case 'FAILURE':
      return Object.assign({}, state, {
        [actionType]: {
          pending: false,
          success: false,
          failed: true,
          error: action.error,
        },
      });
    default:
      return state;
  }
};