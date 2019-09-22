import styled from 'styled-components/macro';

interface StyledButtonProps {
  size: 'small' | 'medium' | 'large';
}

const getFontSizeFromButtonSize = (size: 'small' | 'medium' | 'large') => {
  if (size === 'small') {
    return 10;
  } else if (size === 'medium') {
    return 15;
  } else {
    return 20;
  }
};

export const StyledButton = styled.button<StyledButtonProps>`
  outline: none;
  text-align: center;
  background: #007a5a;
  border: none;
  font-weight: 700;
  font-size: ${props => getFontSizeFromButtonSize(props.size)}px;
  color: #ffffff;
  height: 48px;
  width: 100%;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }
`;
