import React from "react";
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form,
  TextInput,
  TextInputSkeleton,
  InlineNotification,
  Button,
  ButtonSkeleton,
} from 'carbon-components-react';
import {
  Grid,
  Row,
  Col,
} from '../../components';

const RegisterSchema = Yup
  .object()
  .shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .required('Required'),
    passwordVerify: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords does not match')
      .required('Required'),
  });

const RegisterForm = (props) => (
  <Formik
    initialValues={{
      email: '',
      password: '',
      passwordVerify: '',
    }}
    validationSchema={RegisterSchema}
    onSubmit={props.onSubmit}
    render={(formProps) => (
      <Form onSubmit={formProps.handleSubmit}>
        <Grid>
          <Row>
            <Col sm='4'>
              <TextInput
              style={{ width: '100%' }}
                id='register-email'
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
                id='register-password'
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
              <TextInput
                id='register-passwordVerify'
                name='passwordVerify'
                type='password'
                labelText='Verify password'
                onChange={formProps.handleChange}
                onBlur={formProps.handleBlur}
                value={formProps.values.passwordVerify}
                invalid={formProps.errors.passwordVerify !== undefined}
                invalidText={formProps.errors.passwordVerify}
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
              {props.error && (
                <InlineNotification
                  kind="error"
                  title={props.error.title || 'Error'}
                  subtitle={props.error.message}
                  hideCloseButton />
              )}
            </Col>
          </Row>
        </Grid>
      </Form>
    )} />
);

export default RegisterForm;