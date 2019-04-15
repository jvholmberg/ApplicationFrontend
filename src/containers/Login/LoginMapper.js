import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { postLogin } from '../../actions';

export const mapStateToProps = (state, props) => {
  return {};
};

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    postLogin,
  }, dispatch);