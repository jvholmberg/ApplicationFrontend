import _ from 'lodash';
import { bindActionCreators } from 'redux';

import { fetchUsers } from '../../actions'

export const mapStateToProps = (state, props) => {

  return {};
};

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    fetchUsers,
  }, dispatch);