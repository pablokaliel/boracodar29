import styled, { keyframes } from "styled-components";

const blinkAnimation = keyframes`
  0% {
    opacity: 1;
    text-shadow: 0px 0px 11px rgba(255, 255, 255, 0.664);
  }
  50% {
    opacity: 0.5;
    text-shadow: 0px 0px 11px rgb(0, 15, 19);
  }
  100% {
    opacity: 1;
    text-shadow: 0px 0px 11px rgba(255, 255, 255, 0.664);
  }
`;

export const Container = styled.div`
  display: grid;
  place-content: center;

  width: 100%;
  height: 100vh;

  background-color: #000f13;
`;

export const Swapper = styled.div`
display: flex;
flex-direction: column;

gap: 50px;
text-align: center;

h1 {
  animation: ${blinkAnimation} 1.5s infinite;

  color: #fff;
  text-transform: uppercase;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 12px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 32px;
    height: 32px;

    background: #1d1c1c;
    border-radius: 100%;

    transition: all 0.3s;

    &:hover {
      background: #413f3f;
    }
  }
}

@media (max-width: 860px) {
    padding: 0px 12px;
  }
`;

export const Main = styled.div`
  .slider-wrapper {
    width: 810px;
    height: 455px;
  }
`;

export const SliderWrapper = styled.div`
  width: 850px;
  height: 455px;
  
  overflow: hidden;
  
  border-radius: 12px;

  @media (max-width: 860px) {
    width: 100%;
  }
`;
