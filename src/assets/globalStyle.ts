import { createGlobalStyle } from 'styled-components';
import { ScrollBarCss } from '../components/functions/ScrollBar';
import colors from './colors';
import { breakpoints } from './dimensions';

export const GlobalStyle = createGlobalStyle`

    html{
        ${ScrollBarCss}
    }

    @media (min-width: ${breakpoints.xs}px) {
        html {
            font-size: 87.5%;
            /* 16 X 0.875 = 14px */
        }
    }

    @media (min-width: ${breakpoints.md}px) {
        /* font-size = 100% equivalente à 16px */
        html {
            
            font-size: 93.75%;
            /* 16 X 0.9375 = 15px */
        }

    }

    @media (min-width: ${breakpoints.lg}px) {
        /* font-size = 100% equivalente à 16px */
        html {
            font-size: 100%;
            /* 16 X 0.9375 = 15px */
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