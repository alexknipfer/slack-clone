import React from 'react';

import { Sidebar } from './Sidebar';
import { SidebarLayoutContainer, ContentContainer } from './style';

export const SidebarLayout: React.FC = ({ children }) => (
  <SidebarLayoutContainer>
    <Sidebar />
    <ContentContainer>{children}</ContentContainer>
  </SidebarLayoutContainer>
);
