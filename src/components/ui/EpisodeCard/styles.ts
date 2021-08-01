import styled from 'styled-components';
import colors from '../../../assets/colors';


export const widthEpisodeImage = 120;
export const heightEpisodeImage = 67.5;

export const Container = styled.div`
    margin: 0 10px 10px 0;
    width: ${widthEpisodeImage}px;
    & > div:nth-child(1) {
        height: ${heightEpisodeImage}px;
        width: ${widthEpisodeImage}px;
        overflow: hidden;
        position: relative;
        > div {
            position: absolute;
            width: 100%;
            z-index: 2;
            display: flex;
            justify-content: space-between;
            background: rgba(0, 0, 0, .3);
            p{
                color: ${colors.primary};
                padding: 2px;
                font-size: 0.75rem; //12px
            }
        }
        a{
            display: flex;
            height: 100%;
            width: 100%;
            overflow: hidden;
        }
        img {
            height: 100%;
            width: 100%;
            transition: .3s;
            cursor: pointer;
            position: relative;
            &:hover{
                transform: scale(1.1);
            }
        }
    }
    & > p{
        margin-top: 2px;
        font-size: 0.75rem; //12px
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* number of lines to show */
        -webkit-box-orient: vertical;
        max-width: ${widthEpisodeImage}px;
    }
    & .episode-footer {
        display: flex;
        span{
            display: flex;
            align-items: center;
            font-size: 0.75rem; //12px
            color: ${colors.grey};
            margin-right: 8px;
        }
    }
`;
