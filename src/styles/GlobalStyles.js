import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background:#111112;
    --background-body: #1D2025;
    --background-lg: #1F1F1F;
    --background-grey-category: #E1E1E1 ;
    --background-grey-text: #c5c5c5 ;
    --text-white: #ffffff;
    --text-red: #FF0000;
    --bg-blackgrey: #575757;
    --bg-red-cu: #750000;
    --bg-facebook: #1877F2;
  }

  html{
    scroll-behavior: smooth;
  }

  body{
    margin: 0;
    padding: 0;
    background: white;
    font-family: 'kanit';
    color: white;
  }
  a{
    text-decoration: none;
  }

`