import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { setJwtToken } from '../../utils/localStorage';

import LoginForm from './LoginForm';

class LoginView extends PureComponent {

  componentDidUpdate(prevProps) {
    const { props } = this;

    const prevLoginResponse = _.get(prevProps, 'loginResponse', {});
    const loginResponse = _.get(props, 'loginResponse', {});

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
