import { createContext } from 'react';

export const AuthContext = createContext({
  isAuthorized: false,
  login: async (email: string, password: string) => {}
});
