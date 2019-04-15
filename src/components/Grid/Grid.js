import React from 'react';
import PropTypes from 'prop-types';

const Grid = (props) => (
  <div className='bx--grid'>
    {props.children}
  </div>
);

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Grid };