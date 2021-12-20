import { css, Global } from '@emotion/react';

export const a11y = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  border-radius: 0;
  clip: rect(0, 0, 0, 0);
`;

export const ResetStyles = css`
  * {
    .a11y {
      ${css([a11y])};
    }
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -ms-overflow-style: none;
    font-size: inherit;
  }
`;

const GlobalStyles = () => (
  <>
    <Global styles={ResetStyles} />
  </>
);

export default GlobalStyles;
