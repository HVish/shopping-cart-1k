import { css, Global } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={theme => css`
      html,
      body {
        padding: 0;
        margin: 0;
        background: ${theme.palette.background.default};
        font-family: 'Lato', sans-serif;
        min-height: 100%;
        font-size: 16px;
      }

      *,
      *:before,
      *:after {
        box-sizing: border-box;
      }
    `}
  />
);

export default GlobalStyles;
