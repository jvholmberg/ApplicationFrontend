import React from 'react';
import { Link } from 'react-router-dom';
import {
  InlineLoading,
} from 'carbon-components-react';

const Header = (props) => props.showSkeleton
  ? (
    <InlineLoading
      description='loading header' />
  )
  : (
    <div>
      <Link to='/'>
        Landing
      </Link>
      <Link to='/login'>
        Login
      </Link>
      <Link to='/register'>
        Register
      </Link>
    </div>
  );

export { Header };
