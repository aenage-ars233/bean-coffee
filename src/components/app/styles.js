import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Playfair Display";
    src: url("../../assets/fonts/PlayfairDisplay-Regular.ttf");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Playfair Display";
    src: url("../../assets/fonts/PlayfairDisplay-Bold.ttf");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Playfair Display";
    src: url("../../assets/fonts/PlayfairDisplay-Medium.ttf");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Playfair Display";
    src: url("../../assets/fonts/PlayfairDisplay-Semibold.ttf");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Clicker Script";
    src: url("../../assets/fonts/ClickerScript-Regular.ttf");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Playfair Display", serif;
    background-color: #ffffff;
    color: ${(props) => props.theme.blackTextColor};
    line-height: 1.5;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export default GlobalStyles;