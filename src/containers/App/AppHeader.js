import React from 'react';
import PropTypes from 'prop-types';

const Skeleton = (props) => (
  null
);

const Unauthorized = (props) => (
  null
);

const Authorized = (props) => (
  null
);

const AppHeader = (props) => {
  if (props.showSkeleton) {
    return (<Skeleton {...props} />);
  }
  if (props.loggedIn) {
    return (<Authorized {...props} />);
  }
  return (<Unauthorized {...props} />);
};

export default AppHeader;