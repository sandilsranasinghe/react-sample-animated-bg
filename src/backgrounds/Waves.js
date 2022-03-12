import React from "react";
import styled, { keyframes } from "styled-components";
import { SAbgInnerContainer, SAbgContainerWithHeight } from "./common";

const _SAbgKeyFrameWave = (props) => keyframes`
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: calc(-${props.height} * 3);
    }
`;
const _SAbgKeyFrameWaveRise = keyframes`
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5%);
    }
`;
export const SAbgWave = styled.div`
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTAwcHgiIHdpZHRoPSIyNDAwcHgiIHZpZXdCb3g9IjAgMCAyNDAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0iZGVmZXIgbm9uZSI+CiAgICAgICAgPGRlZnM+CiAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMCUiIHkyPSIxMDAlIj4KICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigwLDI1NSwyNTUpO3N0b3Atb3BhY2l0eTowLjIiIC8+CiAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigwLDI1NSwwMCk7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPC9kZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0gMCA2MCBDIDQwIDQwIDgwIDQwIDEyMCA1MCBDIDE0MCA1Ny41IDE2MCA2Mi41IDE4MCA3MCBDIDIyMCA4MCAyNjAgODAgMzAwIDYwIAogICAgICAgIEMgMzQwIDQwIDM4MCA0MCA0MjAgNTAgQyA0NDAgNTcuNSA0NjAgNjIuNSA0ODAgNzAgQyA1MjAgODAgNTYwIDgwIDYwMCA2MCAKICAgICAgICBDIDY0MCA0MCA2ODAgNDAgNzIwIDUwIEMgNzQwIDU3LjUgNzYwIDYyLjUgNzgwIDcwIEMgODIwIDgwIDg2MCA4MCA5MDAgNjAgCiAgICAgICAgQyA5NDAgNDAgOTgwIDQwIDEwMjAgNTAgQyAxMDQwIDU3LjUgMTA2MCA2Mi41IDEwODAgNzAgQyAxMTIwIDgwIDExNjAgODAgMTIwMCA2MCAKICAgICAgICBDIDEyNDAgNDAgMTI4MCA0MCAxMzIwIDUwIEMgMTM0MCA1Ny41IDEzNjAgNjIuNSAxMzgwIDcwIEMgMTQyMCA4MCAxNDYwIDgwIDE1MDAgNjAgCiAgICAgICAgQyAxNTQwIDQwIDE1ODAgNDAgMTYyMCA1MCBDIDE2NDAgNTcuNSAxNjYwIDYyLjUgMTY4MCA3MCBDIDE3MjAgODAgMTc2MCA4MCAxODAwIDYwIAogICAgICAgIEMgMTg0MCA0MCAxODgwIDQwIDE5MjAgNTAgQyAxOTQwIDU3LjUgMTk2MCA2Mi41IDE5ODAgNzAgQyAyMDIwIDgwIDIwNjAgODAgMjEwMCA2MCAKICAgICAgICBDIDIxNDAgNDAgMjE4MCA0MCAyMjIwIDUwIEMgMjI0MCA1Ny41IDIyNjAgNjIuNSAyMjgwIDcwIEMgMjMyMCA4MCAyMzYwIDgwIDI0MDAgNjAgCiAgICAgICAgViAyNDAwIDEwMCBIIDAgMCBaIiBmaWxsPSJ1cmwoI2dyYWQxKSIgLz4KICAgICAgICA8IS0tIDxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiIHN0eWxlPSJzdHJva2U6cmVkO3N0cm9rZS13aWR0aDozOyIgLz4gLS0+CiAgICA8L3N2Zz4=");
  background-repeat: no-repeat;
  background-size: cover;
  width: 400%;
  height: ${(props) => props.height};
  animation: ${props => _SAbgKeyFrameWave(props)} 6s linear infinite, ${_SAbgKeyFrameWaveRise} 10s ease-in-out infinite;
  transform: translateY(0);
  position: absolute;
  bottom: -10%;
  z-index: -1;
`;
SAbgWave.defaultProps = {
    height: "800px"
}
SAbgContainerWithHeight.defaultProps = {
    height: "800px"
}

export const WaveSample = ({ children, height }) => {
    return (
        <SAbgContainerWithHeight height={height} >
            <SAbgWave height={height} />
            <SAbgInnerContainer>{children}</SAbgInnerContainer>
        </SAbgContainerWithHeight>
    )
}