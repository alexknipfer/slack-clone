import React, { useContext } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { EMAIL_REGEX } from '../../../util/regex';
import { Input } from '../../../components/Input';
import { Space } from '../../../style';
import { Button } from '../../../components/Button';
import { AuthContext } from 'apps/web-client/src/stores/auth/context';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .matches(EMAIL_REGEX, 'Invalid email format.')
    .required('Email is required'),
  password: Yup.string().required('Password is required.')
});

export const LoginForm: React.FC = () => {
  const { login } = useContext(AuthContext);
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: values => login(values.email, values.password),
    validationSchema: SignInSchema
  });

  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  );
};
