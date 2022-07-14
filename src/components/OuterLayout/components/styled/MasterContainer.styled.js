import styled from "styled-components";
import abstractGrig from "../../../../assets/graphic_elements/abstract_grid_main.png";

export const StyledMasterContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.masterBackground};
  transition: background 1s ease 0.7s;
`;

export const StyledVignette = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-image: radial-gradient(
    at top,
    rgba(0, 0, 0, 0) 1%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background-position: center;
  background-size: cover;
  opacity: ${({ theme }) => theme.opacities.vignetteOpacity};
  transition: opacity 1s ease 0.7s;
`;

export const StyledGridContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${abstractGrig});
  background-position: center;
  background-size: cover;
  filter: ${({ theme }) => theme.brightnessModes.gridBrightness};
  transition: filter 1s ease 0.7s;
  z-index: 2;
`;
