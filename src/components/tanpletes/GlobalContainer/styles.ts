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
        position: relative;
        & > img{
            position: absolute;
            filter: opacity(.3);
        }
        & > div:nth-child(2) {
            ${widthStyleContainer}
            position: absolute;
            left: 50%;
            z-index: 10;
            bottom: 0;
            transform: translateX(-50%);
            transition: 0.5s ease-in;
            box-shadow: 2px 0px 10px rgb(0 0 0 / 20%);
            background: ${colors.primary};
           
            & > div:nth-child(1){
                
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 70px;
                input {
                    width: 100%;
                    background: transparent;
                    border: none;
                    outline: none;
                    font-size: 1.125rem; //18px
                    /* height: 100px; */
                }
            }
            & > div:nth-child(2){
                position: absolute;
                background: ${colors.primary};
                & > ul {
                    border: 3px solid ${colors.primary};
                    & > a{
                        display: flex;
                        ${widthStyleContainer}
                        /* height: 70px; */
                        /* box-shadow: 2px 0px 10px rgb(0 0 0 / 20%); */
                        border-bottom: 1px solid ${colors.grey};
                        transition: .3s;
                        padding: 16px 0;
                        &:hover{
                            background: ${colors.secondary};
                        }
                    }
                        
                    
                }
            }
            
            
        }
        & > div:nth-child(3) {
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
