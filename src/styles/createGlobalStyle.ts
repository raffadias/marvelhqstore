import { createGlobalStyle } from "styled-components";
import { DefaultThemeProps } from "../types/themeTypes";

export const GlobalStyle = createGlobalStyle<{theme: DefaultThemeProps}>`
  *, html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.fontFamily};
  }
  body {
    background: ${props => props.theme.backgroundColor};
  }
`;
