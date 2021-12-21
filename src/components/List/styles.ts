import styled from '@emotion/styled';
import { boardColor } from '../../styles/colors';

export const Main = styled.main`
  width: min-content;
  display: flex;
  justify-content: flex-start;
  margin-top: 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const BoardWrapper = styled.ul`
  background-color: ${boardColor};
`;

export const Card = styled.li`
  background-color: white;
`;
