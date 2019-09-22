import React from 'react';

import { LOGIN_MUTATION } from './mutations';
import { useMutation } from '@apollo/react-hooks';
import { AuthContext } from './context';

export const AuthProvider: React.FC = ({ children }) => {
  const [login] = useMutation(LOGIN_MUTATION);

  const handleLogin = async (email: string, password: string) => {
    try {
      const { data } = await login({
        variables: { email, password }
      });

      localStorage.setItem('token', data.login.token);
    } catch (err) {
      throw err;
    }
  };

  return (
    <AuthContext.Provider value={{ login: handleLogin, isAuthorized: false }}>
      {children}
    </AuthContext.Provider>
  );
};
