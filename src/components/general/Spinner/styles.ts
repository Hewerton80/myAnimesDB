import styled, {keyframes} from 'styled-components';

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 2px 4px;
    width: fit-content;
    margin: auto;
    svg {
        animation-name: ${spin};
        animation-duration: 750ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
`;
