import styled, { css } from 'styled-components';
import colors from '../../../assets/colors';
import { breakpoints } from '../../../assets/dimensions';

export const widthStyleContainer = css`
    width: 1290px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 16px;
`;

export const Container = styled.div`
    overflow: hidden;
    & > header { 
        background: ${colors.black};
        height: 100px;
        margin-bottom: 16px;
        position: relative;
        background-image: url('/images/banner.jpg');
        background-size: cover;
    }

    .hedaerContainer {
        ${widthStyleContainer}
        display: flex;
        justify-content: space-between;
        height: 100%;
        position: relative;
        filter: none;
    }
    nav {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    .itens {
        height: 100%;
        display: flex;
        align-items: flex-end;
        padding-bottom: 8px;
    }
    .item {
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
    main {
        ${widthStyleContainer}
        overflow: hidden;
        display: grid;
        grid-template-rows: auto auto;
        gap: 16px;
        @media (min-width: ${breakpoints.md}px) {
            grid-template-columns: auto auto;
            grid-template-rows: unset;
        }
        & > .content {
            overflow-x: hidden;
            display: flex;
            flex: 1;
        }
        & > .sections {
            display: grid;
            grid-template-columns: 1fr;
            column-gap: 16px;
            @media (min-width: ${breakpoints.sm}px) {
                grid-template-columns: 1fr 1fr;
            }
            @media (min-width: ${breakpoints.md}px) {
                display: unset;
                width: 250px;
                grid-template-columns: 1fr;
            }
        }

    }
`;
