import styled from '@emotion/styled';
import { boardColor } from '../../styles/colors';

export const Main = styled.main`
  width: min-content;
  display: flex;
  justify-content: flex-start;
  margin-top: 50px;
`;

export const Board = styled.div`
  background-color: ${boardColor};
`;

export const Card = styled.div`
  background-color: white;
`;
