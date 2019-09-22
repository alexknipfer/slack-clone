import React from 'react';

import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { LoginContainer, CardContainer } from './style';

export const Login: React.FC = () => (
  <LoginContainer>
    <CardContainer>
      <Card center>
        <h1>Sign in</h1>
        <Input placeholder="Email" />
      </Card>
    </CardContainer>
  </LoginContainer>
);
