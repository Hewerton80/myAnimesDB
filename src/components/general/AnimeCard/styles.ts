import styled from 'styled-components';
import colors from '../../../assets/colors';
import { breakpoints } from '../../../assets/dimensions';
import { LineClamp } from '../../functions/LineClamp';

export const widthImage = 114;
export const heightImage = 161.36;

export const Container = styled.div`
    margin: 0 10px 10px 0;
    width: ${widthImage * 0.875}px;
    position: relative;
    @media (min-width: ${breakpoints.sm}px) {
        width: ${widthImage}px;
    }
    & > div:nth-child(1) {
        height: ${heightImage * 0.875}px;
        width: ${widthImage * 0.875}px;
        overflow: hidden;
        @media (min-width: ${breakpoints.sm}px) {
            height: ${heightImage}px;
            width: ${widthImage}px;
        }
        a{
            display: flex;
            height: 100%;
            width: 100%;
        }
        img {
            height: ${heightImage * 0.875}px;
            width: ${widthImage * 0.875}px;
            transition: .3s;
            cursor: pointer;
            position: relative;
            @media (min-width: ${breakpoints.sm}px) {
                height: ${heightImage}px;
                width: ${widthImage}px;
            }
            &:hover{
                transform: scale(1.1);
            }
        }
    }
    & > p {
        ${LineClamp(1)}
        margin-top: 2px;
        font-size: 0.85rem; //14px
        max-width: ${heightImage}px;
    }
    & .anime-footer {
        display: flex;
        justify-content: space-between;
        span{
            display: flex;
            align-items: center;
            font-size: 0.75rem; //12px
            color: ${colors.grey};
        }
    }
`;
