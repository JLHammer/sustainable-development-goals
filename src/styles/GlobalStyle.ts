import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: ${({ theme }) => theme.lineHeights.normal};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 ${({ theme }) => theme.space.md};
    font-family: ${({ theme }) => theme.fonts.heading};
    line-height: ${({ theme }) => theme.lineHeights.tight};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  p {
    margin: 0 0 ${({ theme }) => theme.space.md};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img,
  picture,
  video,
  svg {
    display: block;
    max-width: 100%;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
    color: inherit;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }

  ${({ theme }) => theme.media.reducedMotion} {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyle;
