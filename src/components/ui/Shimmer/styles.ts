import styled, { keyframes } from 'styled-components';


const shimmer = keyframes` 
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    animation : ${shimmer} 2s infinite;
    background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
    background-size: 1000px 100%;
`;
