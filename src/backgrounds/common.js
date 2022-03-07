import React from "react";
import styled, { keyframes } from "styled-components";

export const SAbgContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
export const SAbgInnerContainer = styled.div`
  overflow: scroll;
  height: 100%;
`;
export const BasicContainer = ({ children, animatedBgChildren }) => {
  return (
    <SAbgContainer>
      {animatedBgChildren}
      <SAbgInnerContainer>{children}</SAbgInnerContainer>
    </SAbgContainer>
  );
};

export const _SAbgKeyFrameRotate = keyframes`
from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;
export const _SAbgKeyFrameFlyUp = keyframes`
from {
      bottom: -10vh;
    }
    to {
      bottom: 110vh;
    }
`;
