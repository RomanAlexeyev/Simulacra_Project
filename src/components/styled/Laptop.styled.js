import styled from "styled-components";

export const StyledLaptopContainer = styled.div`
  width: 176%;
  min-width: 176%;
  min-height: 249%;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  aspect-ratio: 1.45;

  @media (min-width: 1201px) {
    animation: ${({ zoom }) =>
      zoom === "out" ? "laptopZoomOut50 2s ease 0.7s forwards" : "none"};
  }

  @media (max-width: 1200px) {
    animation: ${({ zoom }) =>
      zoom === "out" ? "laptopZoomOut75 2s ease 0.7s forwards" : "none"};
  }

  @media (max-width: 576px) {
    animation: ${({ zoom }) =>
      zoom === "out" ? "laptopZoomOut100 2s ease 0.7s forwards" : "none"};
  }
`;

export const StyledLaptopScreen = styled.div`
  width: 56.8%;
  height: 40.2%;
  position: absolute;
  transform: translate(-50%, -50%) perspective(1.2vw);
  filter: contrast(1) hue-rotate(0deg);
  left: 50%;
  top: 50%;
  transform-origin: center 40px;
  animation: ${({ zoom }) =>
    zoom === "out" ? "laptopScreenZoomOut 2s ease 0.7s forwards" : "none"};
`;
