import _ from 'lodash';
import { bindActionCreators } from 'redux';

import { fetchUsers, refreshJwt, validateJwt } from '../../actions'
import { reqRefreshJwt, reqValidateJwt } from '../../selectors';

export const mapStateToProps = (state, props) => {
  const {
    queued: queuedRefreshJwt,
    pending: pendingRefreshToken,
  } = reqRefreshJwt(state);
  const { valid: validJwt } = reqValidateJwt(state);
  return {
    queuedRefreshJwt,
    pendingRefreshToken,
    validJwt,
  };
};

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    fetchUsers,
    refreshJwt,
    validateJwt,
  }, dispatch);