import styled from 'styled-components/macro';

interface SpaceProps {
  height: number;
}

export const Space = styled.div<SpaceProps>`
  margin-top: ${props => props.height}px;
`;
