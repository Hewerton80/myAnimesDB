import styled from 'styled-components';
import colors from '../../../assets/colors';
import { widthStyleContainer } from '../../layouts/GlobalContainer/styles';

export const Container = styled.div`
        ${widthStyleContainer}
        position: absolute;
        left: 50%;
        z-index: 10;
        top: 30px;
        transform: translateX(-50%);
        transition: 0.5s ease-in;
        box-shadow: 2px 0px 10px rgb(0 0 0 / 20%);
        background: ${colors.primary};
        .input-wrapper {
            
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
        .list-wrapper {
            background: ${colors.primary};
            width: 100%;
            /* box-shadow: 2px 0px 10px rgb(0 0 0 / 20%); */
            & > ul {
                border: 3px solid ${colors.primary};
                width: 100%;
                & > div{
                    display: flex;
                    ${widthStyleContainer}
                    cursor: pointer;
                    border-bottom: 1px solid ${colors.grey};
                    transition: .3s;
                    padding: 16px 0;
                    &:hover{
                        background: ${colors.secondary};
                    }
                }
            }
        }
`;
