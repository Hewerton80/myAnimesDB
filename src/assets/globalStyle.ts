import { createGlobalStyle } from 'styled-components';
import { ScrollBarCss } from '../components/css/ScrollBar';
import colors from './colors';

export const GlobalStyle = createGlobalStyle`

    html{
        ${ScrollBarCss}
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: ${colors.primary};
        overflow-x: hidden;
    }

 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
    p, span, h1, h2, h3, h4, h5, h6, a, b {
        font-family: Arial, Helvetica, sans-serif;
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }
`;