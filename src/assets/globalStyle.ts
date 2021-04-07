import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: ${colors.primary};
        overflow-x: hidden;
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