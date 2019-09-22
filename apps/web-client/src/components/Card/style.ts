import styled from 'styled-components/macro';

interface CardContainerProps {
  center?: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.center ? 'center' : 'flex-start')};
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  border: 1px solid #ddd;
`;
