import styled from 'styled-components';
import colors from '../../assets/colors';

export const Container = styled.div`
    display: flex;
    overflow-x: hidden;
    /* width: 1024px; */
    max-width: 100%;
    > div {
        width: 100%;
        header {
            margin-bottom: 16px;
            border-bottom: 1px solid ${colors.blue};
            padding-bottom: 2px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            h3{
                color: ${colors.blue};
            }  
            a {
                color: ${colors.blue};
                font-size: 14px;
                font-weight: bold;
                border-bottom: solid 0.5px ${colors.primary};
                &:hover{
                    border-color: ${colors.blue};
                }
            }
        }
        
        & > div{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            overflow-x: hidden;
            margin-bottom:16px;
        }
    }
`;
