import styled, { css } from 'styled-components';
import colors from '../../../assets/colors';

export const widthStyleContainer = css`
    width: 1290px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 16px;
`;

export const Container = styled.div`
    overflow: hidden;
    & > header{
        background: ${colors.black};
        height: 100px;
        margin-bottom: 16px;
        position: relative;
        & > img{
            position: absolute;
            filter: opacity(.3);
        }
        & > div {
            ${widthStyleContainer}
            display: flex;
            justify-content: space-between;
            height: 100%;
            
            position: relative;
            nav {
                /* position: absolute; */
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: flex-end;
                ul{
                    height: 100%;
                    display: flex;
                    align-items: flex-end;
                    padding-bottom: 8px;
                    li {
                        
                        &.active{
                            border-bottom: solid 2px ${colors.primary};
                        }
                        &:hover a {
                            transform: scale(1.1);
                        }
                        a{
                            transition: 0.2s;
                            color: ${colors.primary};
                            /* width: 100%; */
                            display: flex;
                            padding: 0 24px;
                            height: 40px;
                            align-items: center;
                            font-size: 1rem; //16px
                            font-weight: bold;
                        }
                        & > button {
                            padding: 0;
                            height: 40px;
                        }
                    }
                }
            } 
        }
    }
    main {
        ${widthStyleContainer}
        overflow: hidden;
        display: grid;
        grid-template-columns: auto auto;
        gap: 16px;
        /* display: flex; */
        /* & > div:nth-child(1){
            flex: 0 0 ${(992/1240) * 100}%;
            max-width: ${(992/1240) * 100}%;
        } */
        & > .sections{
            width: 250px;
        }
    }
`;
