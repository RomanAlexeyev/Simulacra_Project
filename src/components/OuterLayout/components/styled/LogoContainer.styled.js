import styled from "styled-components";

export const StyledLogoContainer = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  margin-left: 10%;
  font-family: "Mexon";
  user-select: none;
  font-size: 16vh;
  word-break: break-all;

  @media (max-aspect-ratio: 7/5) {
    margin: 0;
  }

  p {
    background-image: radial-gradient(
      at top left,
      rgba(187, 9, 176, 1) 0%,
      rgba(99, 3, 156, 1) 14%,
      rgba(110, 27, 188, 1) 34%,
      rgb(207, 31, 163) 66%,
      rgb(129, 30, 175) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: logoColorAnimation 5s infinite ease-in-out;
  }
`;

export const StyledLogo = styled.div`
  position: absolute;
  width: 3.5em;
  transform: translate(0, -50%);
  top: 50%;
  z-index: 4;
  transition: filter 3s ease;
  animation: ${({ zoom }) =>
    zoom === "out"
      ? "logoZoomOut 2s ease 0.7s forwards"
      : zoom === "in"
      ? "logoZoomIn 1s ease forwards"
      : "none"};

  @media (max-aspect-ratio: 7/5) {
    font-size: 10vw;
    word-break: keep-all;
    width: 9em;
    text-align: center;
    transform: translate(-50%, -50%);
    left: 50%;
  }

  @media (max-aspect-ratio: 4/5) {
    font-size: 20vw;
    word-break: break-all;
    text-align: left;
    width: 3.2em;
    margin-top: 10%;
  }

  &.backlight p {
    opacity: 0;
  }

  #logo_backlight {
    position: absolute;
    transform: ${({ logoIsActive }) =>
      `translate(-50%, -50%) scale(${logoIsActive ? 1.3 : 0})`};
    opacity: ${({ logoIsActive }) => (logoIsActive ? 1 : 0)};
    left: 40%;
    top: 50%;
    width: 150%;
    height: 150%;
    z-index: 1;
    transition: all 1s ease;
  }

  &#logo_1 {
    filter: ${({ theme }) => theme.brightnessModes.logo1Brightness};
    mix-blend-mode: overlay;
    transition: filter 2s ease 0.7s;
  }
  &#logo_2 {
    mix-blend-mode: overlay;
    filter: ${({ theme }) => theme.brightnessModes.logo2Brightness};
    transition: filter 2s ease 0.7s;
  }
  &#logo_3 {
    mix-blend-mode: soft-light;
  }

  &#logo_stroke {
    transform: ${({ zoom }) =>
      zoom === "out" ? "translate(-10%, -50%)" : "translate(0, -50%)"};
    transition: transform 1s ease;
    transition-delay: ${({ zoom }) => (zoom === "out" ? " 1.7s" : "0")};

    @media (max-aspect-ratio: 7/5) {
      transform: ${({ zoom }) =>
      zoom === "out" ? "translate(-60%, -50%)" : "translate(-50%, -50%)"};
    }

    p {
      -webkit-text-stroke: ${({ theme }) => theme.colors.textStroke};
      transition: -webkit-text-stroke 2s ease 0.7s;
      background-image: none;
    }

    .simulacra_logo_stroke {
      position: absolute;
      transform: translate(0, -50%);
      top: 50%;
      left: 0;
      z-index: 5;
      overflow: visible;

      text {
        stroke: ${({ theme }) => theme.colors.logoStrokeColored};
        stroke-width: 2;
        stroke-dasharray: 0 50%;
        filter: ${({ theme }) => theme.shadows.logoShadow};
        pointer-events: none;
        animation: ${({ logoIsActive }) =>
          logoIsActive === true
            ? "logoStrokeEnter 1.2s forwards"
            : logoIsActive === false
            ? "logoStrokeLeave 1.2s forwards"
            : "none"};
      }
    }
  }
`;
