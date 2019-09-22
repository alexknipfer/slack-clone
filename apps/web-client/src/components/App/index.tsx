import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';

import { AppRouter } from '../../router';
import { apolloClient } from '../../config/apolloConfig';
import { AuthProvider } from '../../stores/auth/provider';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, main, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: 'Lato';
    font-weight: 400;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
  }
  
  input, textarea, button {
    font-family: 'Lato';
  }
`;

export const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <AuthProvider>
      <GlobalStyle />
      <AppRouter />
    </AuthProvider>
  </ApolloProvider>
);
