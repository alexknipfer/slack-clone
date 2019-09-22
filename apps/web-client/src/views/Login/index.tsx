import React from 'react';

import { Card } from '../../components/Card';
import { LoginContainer, CardContainer, CardContent } from './style';
import { LoginForm } from './LoginForm';
import { Space } from '../../style';

export const Login: React.FC = () => (
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
