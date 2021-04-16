import { createGlobalStyle } from 'styled-components';
import { ScrollBarCss } from '../components/css/ScrollBar';
import colors from './colors';

export const GlobalStyle = createGlobalStyle`

    html{
        ${ScrollBarCss}
        font-size: 1rem; //16px
    }

    @media (max-width: 1080px) {
        /* font-size = 100% equivalente à 16px */
        html {
            
            font-size: 93.75%;
            /* 16 X 0.9375 = 15px */
        }

    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
            /* 16 X 0.875 = 14px */
        }
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

    .d-none{
        display: none;
    }
`;