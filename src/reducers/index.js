import { combineReducers } from 'redux';

import appReducer, { defaultState as appReducerDefaultState } from './appReducer';
import requestReducer, { defaultState as requestReducerDefaultState } from './requestReducer';

export default combineReducers({
  app: appReducer,
  requests: requestReducer,
}, {
  app: appReducerDefaultState,
  requests: requestReducerDefaultState,
});