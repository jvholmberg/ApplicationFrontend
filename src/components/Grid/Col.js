import React from 'react';
import PropTypes from 'prop-types';

const Col = (props) => {
  let { className } = props;
  const sizes = {
    sm: props.sm,
    md: props.md,
    lg: props.lg,
    xlg: props.xlg,
    max: props.xlg,
  };
  Object
    .entries(sizes)
    .forEach(([key, value]) => {
      if (value) {
        className = `${className} bx--col-${key}-${value}`;
      }
    });
  return (
    <div className={className}>
      {props.children}
    </div>
  );
};

Col.propTypes = {
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  xlg: PropTypes.string,
  max: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Col.defaultProps = {
  className: '',
};

export { Col };