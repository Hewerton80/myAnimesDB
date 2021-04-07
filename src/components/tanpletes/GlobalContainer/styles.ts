import styled, { css } from 'styled-components';
import colors from '../../../assets/colors';
import { darken } from 'polished';

const widthStyleContainer = css`
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
        img{
            position: absolute;
            filter: opacity(.3);
        }
        & > div {
            ${widthStyleContainer}
            display: flex;
            
            height: 100%;
            
            position: relative;
            nav {
                position: absolute;
                height: 100%;
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
                        a {
                            transition: 0.2s;
                            color: ${colors.primary};
                            /* width: 100%; */
                            display: flex;
                            padding: 0 24px;
                            height: 40px;
                            align-items: center;
                            font-size: 16px;
                            font-weight: bold;
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
        .sections{
            width: 250px;
        }
    }
`;
