import React, { ChangeEvent } from 'react';

import { StyledInput } from './style';

interface InputProps {
  value: string;
  type: string;
  onChange: (e: ChangeEvent) => void;
  errorMessage?: string;
  onBlur?: () => void;
  name?: string;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  type,
  onChange,
  onBlur,
  errorMessage,
  name,
  placeholder
}) => (
  <StyledInput
    type={type}
    placeholder={placeholder}
    value={value}
    name={name}
    onChange={onChange}
    onBlur={onBlur}
    hasError={!!errorMessage}
  />
);
