import styled from '@emotion/styled';
import { css } from '@emotion/react';

const buttonStyles = css`
  border-radius: 4px;
  width: max-content;
  border: none;
  background-color: #5a93be;
  padding: 6px 12px;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

export const BasicButton = styled.button`
  ${buttonStyles};
`;
