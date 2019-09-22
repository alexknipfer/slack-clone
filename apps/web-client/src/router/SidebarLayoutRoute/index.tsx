import React, { useContext } from 'react';
import { parse } from 'query-string';
import { RouteProps, Route, Redirect } from 'react-router-dom';

import { SidebarLayout } from '../../layouts/SidebarLayout';
import { AuthContext } from '../../stores/auth/context';

export const SidebarLayoutRoute: React.FC<RouteProps> = ({
  component,
  ...rest
}) => {
  const { isAuthorized } = useContext(AuthContext);

  const parsedQueryParams = {
    queryParams: rest.location ? parse(rest.location.search) : {}
  };

  if (component) {
    const Component = component;

    return (
      <Route
        {...rest}
        render={props => {
          if (isAuthorized) {
            return (
              <SidebarLayout {...props}>
                <Component {...props} {...parsedQueryParams} />
              </SidebarLayout>
            );
          } else {
            return <Redirect to="/" />;
          }
        }}
      />
    );
  } else {
    return null;
  }
};
