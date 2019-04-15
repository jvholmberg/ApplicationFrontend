import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';


class LoginView extends PureComponent {

  render() {
    const { props } = this;
    console.log(props)
    return (
      <LoginForm
        onSubmit={props.postLogin} />
    );
  }
}

export default LoginView;
