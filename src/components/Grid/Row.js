import React from 'react';
import PropTypes from 'prop-types';

const Row = (props) => (
  <div className='bx--row'>
    {props.children}
  </div>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Row };