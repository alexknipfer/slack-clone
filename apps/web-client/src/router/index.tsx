import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { Login } from '../views/Login';
import { Dashboard } from '../views/Dashboard';
import { SidebarLayoutRoute } from './SidebarLayoutRoute';

export const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <SidebarLayoutRoute exact path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);
