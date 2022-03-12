import React from "react";
import styled, { css, keyframes } from "styled-components";
import { SAbgContainer, SAbgInnerContainer } from "./common";

const _SAbgKeyFrameBGColor = (props) => keyframes`
  0% {
    background-color: ${props.bgColor1 || "#777777"};
  }
  100% {
    background-color: ${props.bgColor2 || "#ffffff"};
  }
`;
export const SAbgChangingGradientOverlayDiv = styled(SAbgContainer)`
  background-color: ${(props) => props.bgColor1 || "#777777"};
  animation-name: ${(props) => _SAbgKeyFrameBGColor(props)};
  animation-timing-function: ease-in;
  animation-duration: 8s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  background-image: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.2)
  );

  scrollbar-base-color: transparent;
`;

export const ChangingGradientOverlaySample = ({
  children,
  bgColor1,
  bgColor2,
}) => {
  return (
    <SAbgChangingGradientOverlayDiv bgColor1={bgColor1} bgColor2={bgColor2}>
      <SAbgInnerContainer>{children}</SAbgInnerContainer>
    </SAbgChangingGradientOverlayDiv>
  );
};

const _SAbgKeyFrameMovingBackground = keyframes`
  0%, 100% {
    background-position: 0% 100%;
  }
  50% {
    background-position: 100% 0%;
  }
`;
export const SAbgMovingGradientDiv = styled(SAbgContainer)`
  background: linear-gradient(
    45deg,
    #550077,
    #000077,
    #005537,
    #00aa00,
    #cccc00,
    #ff9900,
    #ff0000
  );
  background-size: 400% 400%;
  animation: ${_SAbgKeyFrameMovingBackground} 28s linear infinite;
`;

export const SAbgMovingGradientSample = ({ children }) => {
  return (
    <SAbgMovingGradientDiv>
      <SAbgInnerContainer>{children}</SAbgInnerContainer>
    </SAbgMovingGradientDiv>
  );
};
