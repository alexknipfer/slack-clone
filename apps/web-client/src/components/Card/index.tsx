import React from 'react';

import { CardContainer } from './style';

interface CardProps {
  center?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, center }) => (
  <CardContainer center={center}>{children}</CardContainer>
);
