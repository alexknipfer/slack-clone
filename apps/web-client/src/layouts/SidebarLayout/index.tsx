import React from 'react';

import { Sidebar } from './Sidebar';
import { SidebarLayoutContainer, ContentContainer } from './style';
import { UserProvider } from '../../stores/user/provider';

export const SidebarLayout: React.FC = ({ children }) => (
  <UserProvider>
    <SidebarLayoutContainer>
      <Sidebar />
      <ContentContainer>{children}</ContentContainer>
    </SidebarLayoutContainer>
  </UserProvider>
);
