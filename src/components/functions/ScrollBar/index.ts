import { css } from 'styled-components';
import colors from '../../../assets/colors';

export const ScrollBarCss = css`
    ::-webkit-scrollbar {
        height: 10px;
        width: 12px;
    }
    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 12px;
        border-radius: 12px;
        background: ${colors.blue}; 
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    }
`;