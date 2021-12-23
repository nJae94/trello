import styled from '@emotion/styled';
import { boardColor } from '../../styles/colors';

export const Wrapper = styled.div`
  width: 300px;
  background-color: ${boardColor};
  border-radius: 5px;
  margin-right: 20px;
  min-height: min-content;
`;

export const Title = styled.h2`
  padding: 5px;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Content = styled.ul`
  min-height: 5px;
  li {
    background-color: #636e72;
    border-radius: 5px;
    list-style: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonWap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
