import _ from 'lodash';
import { bindActionCreators } from 'redux';

import { fetchUsers, refreshJwt } from '../../actions'
import { reqRefreshJwt } from '../../selectors';

export const mapStateToProps = (state, props) => {
  const {
    queued: queuedRefreshJwt,
    pending: pendingRefreshToken,
  } = reqRefreshJwt(state);
  return {
    queuedRefreshJwt,
    pendingRefreshToken,
  };
};

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    fetchUsers,
    refreshJwt,
  }, dispatch);