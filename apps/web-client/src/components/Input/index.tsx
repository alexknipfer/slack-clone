import React from 'react';

import { StyledInput } from './style';

interface InputProps {
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ placeholder }) => (
  <StyledInput placeholder={placeholder} />
);
