import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { Card } from '../../components/Card';
import { LoginContainer, CardContainer, CardContent } from './style';
import { LoginForm } from './LoginForm';
import { Space } from '../../style';
import { AuthContext } from '../../stores/auth/context';

export const Login: React.FC = () => {
  const { isAuthorized } = useContext(AuthContext);

  if (isAuthorized) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <LoginContainer>
      <CardContainer>
        <Card center>
          <CardContent>
            <h1>Sign in</h1>
            <Space height={15} />
            <LoginForm />
          </CardContent>
        </Card>
      </CardContainer>
    </LoginContainer>
  );
};
