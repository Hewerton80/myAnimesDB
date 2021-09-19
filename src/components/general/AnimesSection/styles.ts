import styled from 'styled-components';
import colors from '../../../assets/colors';

export const Container = styled.section`

    width: 100%;
    padding: 8px 0;
    
    & > div {
        width: 100%;
        border: 1px solid ${colors.blue};
        border-radius: 10px;
        
        header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid ${colors.blue};
            background: ${colors.blue};
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            padding: 4px 8px;
            h5 {
                color: ${colors.primary};
                border-bottom: solid 0.5px ${colors.blue};
            }
            a {
                color: ${colors.primary};
                font-size: 0.75rem; //12px
                border-bottom: solid 0.5px ${colors.blue};
                &:hover{
                    border-color: ${colors.primary};
                }
            }
        }
        ul {
            padding: 8px;
            width: 100%;
        }
    }
        
`;
