import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { getJwt } from '../../actions';
import {
  reqGetJwt,
  resGetJwt,
  errGetJwt,
} from '../../selectors';

export const mapStateToProps = (state, props) => {
  const loginResponse = resGetJwt(state);
  const loginError = errGetJwt(state);
  return {
    loginResponse,
    loginError,
  };
};

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getJwt,
  }, dispatch);