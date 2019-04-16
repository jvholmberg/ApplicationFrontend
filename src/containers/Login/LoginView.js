import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  setJwtToken,
  removeJwtToken,
} from '../../utils/localStorage';

import LoginForm from './LoginForm';


class LoginView extends PureComponent {

  componentDidUpdate(prevProps) {
    const prevLoginResponse = _.get(prevProps, 'loginResponse', {});
    const loginResponse = _.get(this, 'props.loginResponse', {});

    console.log(prevProps, this.props)
    if (prevLoginResponse.accessToken !== loginResponse.accessToken) {
      setJwtToken(loginResponse);
    }
  }

  render() {
    const { props } = this;
    return (
      <LoginForm
        error={props.loginError}
        onSubmit={props.getJwt} />
    );
  }
}

export default LoginView;
