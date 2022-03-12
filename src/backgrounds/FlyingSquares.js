import React from "react";
import styled, { css, keyframes } from "styled-components";
import {
  SAbgContainer,
  SAbgInnerContainer
} from "./common";

const _SAbgKeyFrameRotate = keyframes`
  from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;
const _SAbgKeyFrameFlyUp = keyframes`
  from {
      bottom: -10vh;
    }
    to {
      bottom: 110vh;
    }
`;
const _SAbgFlyingSquare = styled.div`
  position: absolute;
  bottom: -10vh;
  animation-name: ${_SAbgKeyFrameRotate}, ${_SAbgKeyFrameFlyUp};
  animation-duration: 2s, 12s;
  animation-timing-function: linear, linear;
  animation-delay: 0ms, 0ms;
  animation-iteration-count: infinite;
  z-index: -1;
`;
const _sm = css`
  height: 2.5vh;
  width: 2.5vh;
  border-radius: 2px;
`;
const _md = css`
  height: 6vh;
  width: 6vh;
  border-radius: 4px;
`;
const _lg = css`
  height: 8vh;
  width: 8vh;
  border-radius: 8px;
`;
const SAbgFlyingSquareSample = styled(_SAbgFlyingSquare)`
  background-color: rgba(0, 0, 0, 0.2);

  :nth-of-type(1) {
    left: 8%;
    animation-duration: 3.2s, 15s;
    animation-delay: 4s, 12s;
    ${_md}
  }
  :nth-of-type(2) {
    left: 22%;
    animation-duration: 2s, 12s;
    animation-delay: 0s, 0s;
    ${_sm}
  }
  :nth-of-type(3) {
    left: 23%;
    animation-duration: 6s, 15s;
    animation-delay: 8s, 24s;
    ${_lg}
  }
  :nth-of-type(4) {
    left: 40%;
    animation-duration: 3.2s, 18s;
    animation-delay: 0s, 0s;
    ${_sm}
  }
  :nth-of-type(5) {
    left: 44%;
    animation-duration: 1.8s, 9.6s;
    animation-delay: 0.5s, 1.5s;
    ${_sm}
  }
  :nth-of-type(6) {
    left: 54%;
    animation-duration: 7.2s, 18s;
    animation-delay: 2s, 6s;
    ${_md}
  }
  :nth-of-type(7) {
    left: 56%;
    animation-duration: 18s, 42s;
    animation-delay: 0s, 0s;
    ${_lg}
  }
  :nth-of-type(8) {
    left: 68%;
    animation-duration: 1s, 9.6s;
    animation-delay: 1s, 3s;
    ${_sm}
  }
  :nth-of-type(9) {
    left: 74%;
    animation-duration: 8s, 12s;
    animation-delay: 2s, 6s;
    ${_sm}
  }
  :nth-of-type(10) {
    left: 88%;
    animation-duration: 3.2s, 24s;
    animation-delay: 3.2s, 9.6s;
    ${_md}
  }
  :nth-of-type(11) {
    left: 90%;
    animation-duration: 2s, 12s;
    animation-delay: 0s, 0s;
    ${_sm}
  }
`;

export const FlyingSquaresSample = ({ children }) => {
  return (
    <SAbgContainer>
      <SAbgFlyingSquareSample />
      <SAbgFlyingSquareSample />
      <SAbgFlyingSquareSample />
      <SAbgFlyingSquareSample />
      <SAbgFlyingSquareSample />
      <SAbgFlyingSquareSample />
      <SAbgFlyingSquareSample />
      <SAbgFlyingSquareSample />
      <SAbgFlyingSquareSample />
      <SAbgFlyingSquareSample />
      <SAbgFlyingSquareSample />

      <SAbgInnerContainer>{children}</SAbgInnerContainer>
    </SAbgContainer>
  );
};
