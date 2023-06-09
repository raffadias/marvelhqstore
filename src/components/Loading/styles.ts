import styled, { keyframes } from "styled-components";

const spinnerAnimation = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

interface SpinnerProps {
  size?: number;
}

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100vh;
  border-radius: ${({theme}) => theme.borderRadius};
  margin: 20px auto;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const Spinner = styled.div<SpinnerProps>`
width: ${({size}) => size || 56}px;
height: ${({size}) => size || 56}px;
display: grid;
border: 4.5px solid #0000;
border-radius: 50%;
border-color: #e96262 #0000;
animation: ${spinnerAnimation} 1s infinite linear;

&::before,
&::after {
content: "";
grid-area: 1/1;
margin: 2.2px;
border: inherit;
border-radius: 50%;
}

&::before {
border-color: #e23636 #0000;
animation: inherit;
animation-duration: 0.5s;
animation-direction: reverse;
}

&::after {
margin: 8.9px;
}
`;

