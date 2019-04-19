import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import { getJwtToken } from '../../utils/localStorage';

import AppHeader from './AppHeader';
import AppRoutes from './AppRoutes';

class AppView extends PureComponent {

  componentDidMount() {
    const { props } = this;

    // Validate jwt-token if exists
    const jwt = getJwtToken();
    if (jwt) {
      props.validateJwt();
    }
  }

  componentDidUpdate(prevProps) {
    const { props } = this;

    // Refresh jwt-token if queued
    if (!prevProps.queuedRefreshJwt
      && props.queuedRefreshJwt
      && !props.pendingRefreshToken) {
        const jwt = getJwtToken();
        props.refreshJwt(jwt.refreshToken);
      }
  }

  render() {
    const { props } = this;
    return (
      <Fragment>
        <AppHeader
          loggedIn={props.validJwt} />
        <AppRoutes
          loggedIn={props.validJwt} />
      </Fragment>
    );
  }
}

export default AppView;
