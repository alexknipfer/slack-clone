import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { UserContext } from './context';
import { GET_USER_QUERY } from './queries';
import { LOCAL_STORAGE_TOKEN_KEY } from '../../util/localStorageKeys';

export const UserProvider: React.FC = ({ children }) => {
  const { loading, data } = useQuery(GET_USER_QUERY, {
    variables: { token: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) }
  });

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <UserContext.Provider value={{ user: data.getUser }}>
      {children}
    </UserContext.Provider>
  );
};
