import styled from 'styled-components';
import colors from '../../../assets/colors';
import { LineClamp } from '../../css/LineClamp';

export const Li = styled.li`

    display: flex;
    & > p{
        margin-right: 4px;
        font-size: 1rem; //16px
        font-weight: bold;
        color: ${colors.blue};                     
    } 
    img {
        margin-right: 4px;
        width: 50px;
        height: 70.9px;
    }
    & > div {
        display: flex;
        flex-direction: column;
        a {
            font-size: 0.875rem; //14px
            color: ${colors.blue};
            font-weight: bold;
            margin-bottom: 2px;
            ${LineClamp(1)}
            &:hover {
                text-decoration: underline;
            }  
        } 
        & > div{
            display: flex;
            flex-wrap: wrap;
            span{
                display: flex;
                align-items: center;
                font-size: 0.75rem; //12px
                color: ${colors.grey};
                margin-right: 8px;
            }
        }
    }
    
    & > hr {
        margin: 8px 0;
    }
`;
