import React from "react";
import styled, { keyframes } from "styled-components";

export const SAbgContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
export const SAbgInnerContainer = styled.div`
  overflow: auto;
  height: 100%;
  width: 100%;
  z-index: 1;
`;
export const BasicContainer = ({ children, animatedBgChildren }) => {
  return (
    <SAbgContainer>
      {animatedBgChildren}
      <SAbgInnerContainer>{children}</SAbgInnerContainer>
    </SAbgContainer>
  );
};
export const SAbgContainerWithHeight = styled.div`
  position: relative;
  height: ${(props) => props.height};
  width: 100%;
  overflow: hidden;
`;
