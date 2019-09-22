import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import { EMAIL_REGEX } from '../../../util/regex';
import { Input } from '../../../components/Input';
import { Space } from '../../../style';
import { Button } from '../../../components/Button';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .matches(EMAIL_REGEX, 'Invalid email format.')
    .required('Email is required'),
  password: Yup.string().required('Password is required.')
});

export const LoginForm: React.FC = () => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={SignInSchema}
    onSubmit={values => console.log(values)}
    render={({ values, handleChange, errors }) => (
      <Form>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          errorMessage={errors.email}
        />
        <Space height={10} />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        <Space height={15} />
        <Button type="submit" text="Sign In" size="large" />
      </Form>
    )}
  ></Formik>
);
