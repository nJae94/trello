import styled from '@emotion/styled';

export const Wrapper = styled.header`
  width: 270px;
  margin: 0 auto;
  padding: 10px;
  background-color: white;
  border-radius: 4px;
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border-radius: 4px;
  margin: 10px 0px;
  border: none;
  padding: 8px 10px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 14px;
  }
`;
