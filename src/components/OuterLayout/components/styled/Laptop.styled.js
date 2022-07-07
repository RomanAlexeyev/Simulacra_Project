import styled from "styled-components";

export const StyledLaptopContainer = styled.div`
  /* width: ${({ zoom }) => (zoom === "out" ? "50%" : "176%")};
  min-width: ${({ zoom }) => (zoom === "out" ? "0" : "176%")};
  min-height: ${({ zoom }) => (zoom === "out" ? "0" : "249%")};
  transform: ${({ zoom }) =>
    `translate(${zoom === "out" ? "0" : "-50%"}, ${
      zoom === "out" ? "-75%" : "-50%"
    })`}; */
  width: 176%;
  min-width: 176%;
  min-height: 249%;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  aspect-ratio: 1.45;
  will-change: transform;

  @media (min-width: 1201px) {
    animation: ${({ zoom }) =>
      zoom === "out"
        ? "laptopZoomOut50 2s ease 0.7s forwards"
        : zoom === "in"
        ? "laptopZoomIn 1s ease forwards"
        : "none"};
  }

  @media (max-width: 1200px) {
    animation: ${({ zoom }) =>
      zoom === "out"
        ? "laptopZoomOut75 2s ease 0.7s forwards"
        : zoom === "in"
        ? "laptopZoomIn 2s ease 0.1s forwards"
        : "none"};
  }

  @media (max-width: 576px) {
    animation: ${({ zoom }) =>
      zoom === "out"
        ? "laptopZoomOut100 2s ease 0.7s forwards"
        : zoom === "in"
        ? "laptopZoomIn 2s ease 0.1s forwards"
        : "none"};
  }

  .return_button {
    background-image: linear-gradient(
      90deg,
      rgb(99, 0, 156) 0%,
      rgb(166, 1, 130) 50%,
      rgb(227, 13, 120) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-family: "Mexon";
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 110%;
    font-size: 1.2vw;
    border: 1px solid rgb(166, 1, 130);
    padding: 10px 20px;
    cursor: pointer;
    transition: filter 0.3s ease;

    &:hover {
      filter: drop-shadow(0 0 15px rgb(236, 12, 199));
    }
  }
`;

export const StyledLaptopScreen = styled.div`
  /* width: ${({ zoom }) => (zoom === "out" ? "42%" : "56.8%")};
  height: ${({ zoom }) => (zoom === "out" ? "33.5%" : "40.2%")};
  transform: ${({ zoom }) =>
    `translate(-50%, -50%) perspective(${
      zoom === "out" ? "1.6" : "1.2"
    }vw) rotateY(${zoom === "out" ? "-1" : "0"}deg)`}; */
  width: 56.8%;
  height: 40.2%;
  position: absolute;
  transform: translate(-50%, -50%) perspective(1.2vw);
  filter: contrast(1) hue-rotate(0deg);
  left: 50%;
  top: 50%;
  transform-origin: center 40px;
  /* transition: all 2s ease 0.7s; */
  will-change: transform;
  animation: ${({ zoom }) =>
    zoom === "out"
      ? "laptopScreenZoomOut 2s ease 0.7s forwards"
      : zoom === "in"
      ? "laptopScreenZoomIn 1s ease forwards"
      : "none"};
`;
