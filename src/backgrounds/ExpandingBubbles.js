import React from "react";
import styled, { keyframes } from "styled-components";
import { SAbgContainer, SAbgInnerContainer } from "./common";

const _SAbgKeyFrameExpandPause = keyframes`
    0%,
    100% {
      transform: scale(0, 0);
    }
    50% {
      transform: scale(2, 2);
    }
`;
const _SAbgKeyFrameAppearDisappearPause = keyframes`
    0%,
    50%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
`;
export const SAbgExpandingBubble = styled.div`
  height: ${(props) => props.radius || "4rem"};
  width: ${(props) => props.radius || "4rem"};
  border-radius: ${(props) => props.radius / 2 || "2rem"};
  transform: scale(0, 0);
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  animation: ${_SAbgKeyFrameExpandPause} 8s linear 0s infinite forwards,
    ${_SAbgKeyFrameAppearDisappearPause} 8s linear 0s infinite forwards;
`;
const SAbgExpandingBubbleSample = styled(SAbgExpandingBubble)`
  :nth-of-type(1) {
    top: 20%;
    left: 25%;
  }
  :nth-of-type(2) {
    top: 10%;
    left: 60%;
    animation-delay: 3s, 3s;
  }
  :nth-of-type(3) {
    top: 50%;
    left: 35%;
    animation-delay: 2s, 2s;
  }
  :nth-of-type(4) {
    top: 70%;
    left: 50%;
    animation-delay: 5s, 5s;
  }
  :nth-of-type(5) {
    top: 75%;
    left: 75%;
    animation-delay: 1s, 1s;
  }
`;

export const ExpandingBubblesSample = ({ children, bubbleRadius, backgroundColor }) => {
  return (
    <SAbgContainer backgroundColor={backgroundColor} >
      <SAbgExpandingBubbleSample radius={bubbleRadius} />
      <SAbgExpandingBubbleSample radius={bubbleRadius} />
      <SAbgExpandingBubbleSample radius={bubbleRadius} />
      <SAbgExpandingBubbleSample radius={bubbleRadius} />
      <SAbgExpandingBubbleSample radius={bubbleRadius} />

      <SAbgInnerContainer>{children}</SAbgInnerContainer>
    </SAbgContainer>
  );
};
