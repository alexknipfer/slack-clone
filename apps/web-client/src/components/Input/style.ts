import styled from 'styled-components/macro';

interface StyledInputProps {
  hasError?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  outline: none;
  border-radius: 0.25rem;
  padding: 0.75rem;
  height: auto;
  font-size: 1.25rem;
  width: 100%;
  border: ${props => (props.hasError ? '1px solid red' : '1px solid #868686')};
`;
