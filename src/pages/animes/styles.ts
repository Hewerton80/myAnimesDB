import styled from 'styled-components';
import colors from '../../assets/colors';

export const Container = styled.div`
  
    & > div:nth-child(1) {
        display: flex;
        margin-bottom: 16px;
        border-bottom: 1px solid ${colors.blue};
        h3 {
            color: ${colors.blue};
        }
    } 
    & > div:nth-child(2) {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin-bottom: 16px;
    }
    & > div:nth-child(3) {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
    }
`;
