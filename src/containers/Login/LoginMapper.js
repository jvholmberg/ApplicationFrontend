import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { postLogin } from '../../actions';
import {
  reqPostLogin,
  resPostLogin,
  errPostLogin,
} from '../../selectors';

export const mapStateToProps = (state, props) => {
  const loginResponse = resPostLogin(state);
  const loginError = errPostLogin(state);
  return {
    loginResponse,
    loginError,
  };
};

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    postLogin,
  }, dispatch);