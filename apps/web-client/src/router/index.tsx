import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { Login } from '../views/Login';

export const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </BrowserRouter>
);
