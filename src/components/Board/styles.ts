import styled from '@emotion/styled';
import { boardColor } from '../../styles/colors';
import { BasicButton } from '../common/Button';

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
  padding: 10px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  border: none;
  padding: 8px;
`;

export const Button = styled(BasicButton)`
  &:hover {
    background: rgba(92, 93, 94, 0.1);
    cursor: pointer;
  }
`;

export const CancleButton = styled(BasicButton)`
  background-color: #e41566;
  color: white;
  margin-left: 10px;
`;
