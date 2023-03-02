import '@/assets/fonts/SF/stylesheet.css';
import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

  body {
    margin: 0;
    font-family: 'SF Pro Display', sans-serif;
    background: #F1F4F9;

  }

  a {
    text-decoration: none;
  }

  ;
  li {
    list-style-type: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
  }
`;
