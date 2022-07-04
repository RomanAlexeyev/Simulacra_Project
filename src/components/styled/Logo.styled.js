import styled from "styled-components";

export const StyledLogo = styled.div`
  font-family: 'Mexon';
  user-select: none;
  font-size: 16vh;
  word-break: break-all;
  position: absolute;
  width: 3.5em;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 25%;
  z-index: 4;
  transition: transform 1s ease 1.7s, filter 3s ease;
  animation: ${({ zoom }) =>
    zoom === "out" ? "logoZoomOut 2s ease 0.7s forwards" : "none"};

  @media (max-width: 1200px) {
    font-size: 10vw;
    word-break: keep-all;
    width: 9em;
    text-align: center;
    top: 25%;
    left: 50%;
  }

  @media (max-width: 576px) {
    font-size: 20vw;
    word-break: break-all;
    text-align: left;
    width: 3.2em;
    top: 30%;
    left: 50%;
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

  &#logo_container_1 {
    mix-blend-mode: ${({ theme }) => theme.blendModes.logoBlendMode};
  }
  &#logo_container_2 {
    mix-blend-mode: color;
  }
  &#logo_container_3 {
    mix-blend-mode: soft-light;
  }

  &#logo_stroke {
    transform: ${({ zoom }) =>
      zoom === "out" ? "translate(-45%, -50%)" : "translate(-50%, -50%)"};

    p {
      -webkit-text-stroke: ${({ theme }) => theme.colors.textStroke};
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
