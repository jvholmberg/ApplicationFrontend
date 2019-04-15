import React from "react";
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form,
  TextInput,
  TextInputSkeleton,
  Button,
  ButtonSkeleton,
} from 'carbon-components-react';
import {
  Grid,
  Row,
  Col,
} from '../../components';

const LoginSchema = Yup
  .object()
  .shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .required('Required'),
  });

const LoginForm = (props) => (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    validationSchema={LoginSchema}
    onSubmit={props.onSubmit}
    render={(formProps) => (
      <Form onSubmit={formProps.handleSubmit}>
        <Grid>
          <Row>
            <Col sm='4'>
              <TextInput
              style={{ width: '100%' }}
                id='login-email'
                name='email'
                type='text'
                labelText='Email'
                onChange={formProps.handleChange}
                onBlur={formProps.handleBlur}
                value={formProps.values.email}
                invalid={formProps.errors.email !== undefined}
                invalidText={formProps.errors.email}
                light />
            </Col>
          </Row>
          <Row>
            <Col sm='4'>
              <TextInput
                id='login-password'
                name='password'
                type='password'
                labelText='Password'
                onChange={formProps.handleChange}
                onBlur={formProps.handleBlur}
                value={formProps.values.password}
                invalid={formProps.errors.password !== undefined}
                invalidText={formProps.errors.password}
                light />
            </Col>
          </Row>
          <Row>
            <Col sm='4'>
              <Button
                type='submit'
                kind='primary'>
                Log in
              </Button>
            </Col>
          </Row>
        </Grid>
      </Form>
    )} />
);

export default LoginForm;