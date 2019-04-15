import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  TextInput,
  TextInputSkeleton,
} from 'carbon-components-react';


class RegisterView extends PureComponent {

  render() {

    return (
      <Form>
        register
        <TextInput
          name='username'
          type='text'
          labelText='Username' />
        <TextInput
          name='password'
          type='password'
          labelText='Username' />
      </Form>
    );
  }
}

export default RegisterView;
