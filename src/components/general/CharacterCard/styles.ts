import styled from 'styled-components';
import colors from '../../../assets/colors';

export const widthCharacterImage = 60;
export const heightCharacterImage = 93;

export const Container = styled.div`
    margin: 0 10px 10px 0;
    width: ${widthCharacterImage}px;
    position: relative;
    & > div:nth-child(1) {
        height: ${heightCharacterImage}px;
        width: ${widthCharacterImage}px;
        overflow: hidden;
        a{
            height: ${heightCharacterImage}px;
            width: ${widthCharacterImage}px;
            overflow: hidden;
        }
        img {
            width: ${widthCharacterImage}px;
            height: ${heightCharacterImage}px;
            transition: .3s;
            cursor: pointer;
            position: relative;
            object-fit: cover;
            &:hover{
                transform: scale(1.1);
            }
        }
    }
    & > p{
        margin-top: 2px;
        font-size: 0.75rem; //12px
        overflow: hidden;
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
