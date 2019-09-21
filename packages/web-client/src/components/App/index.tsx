import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

import { AppRouter } from '../../router';

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
  
  input, textarea, button {
    font-family: 'Lato';
  }
`;

export const App: React.FC = () => (
  <Fragment>
    <GlobalStyle />
    <AppRouter />
  </Fragment>
);
