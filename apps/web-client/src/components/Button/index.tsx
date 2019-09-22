import React from 'react';
import { StyledButton } from './style';

interface ButtonProps {
  text: string;
  size: 'small' | 'medium' | 'large';
  type?: 'submit' | 'reset' | 'button';
}

export const Button: React.FC<ButtonProps> = ({
  size,
  text,
  type = 'button'
}) => (
  <StyledButton size={size} type={type}>
    {text}
  </StyledButton>
);
