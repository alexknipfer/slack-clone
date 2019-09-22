import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { LOGIN_MUTATION } from './mutations';
import { AuthContext } from './context';
import { LOCAL_STORAGE_TOKEN_KEY } from '../../util/localStorageKeys';

export const AuthProvider: React.FC = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [login] = useMutation(LOGIN_MUTATION);

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

    if (token) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, []);

  const handleLogin = async (email: string, password: string) => {
    try {
      const { data } = await login({
        variables: { email, password }
      });

      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, data.login.token);
      setIsAuthorized(true);
    } catch (err) {
      throw err;
    }
  };

  return (
    <AuthContext.Provider value={{ login: handleLogin, isAuthorized }}>
      {children}
    </AuthContext.Provider>
  );
};
