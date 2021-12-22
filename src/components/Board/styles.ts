import styled from '@emotion/styled';
import { boardColor } from '../../styles/colors';

export const Wrapper = styled.div`
  width: 300px;
  background-color: ${boardColor};
  border-radius: 5px;
`;

export const Title = styled.h2``;

export const Content = styled.ul`
  min-height: 5px;
  li {
    background-color: #636e72;
    border-radius: 5px;
  }
`;
