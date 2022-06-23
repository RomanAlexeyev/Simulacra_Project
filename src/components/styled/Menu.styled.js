import styled from "styled-components";

export const StyledMenuContainer = styled.div`
  font-family: Mexon;
  user-select: none;
  font-size: 7vh;
  text-align: right;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  right: 0;
  z-index: 4;
  color: transparent;
  -webkit-text-stroke: 2px rgb(0, 0, 0);
  text-shadow: 0 0 0 rgb(20, 20, 20);
  transition: filter 3s ease;
  filter: ${({ blurred }) => `blur(${blurred ? 2 : 0}px)`};

  @media (max-width: 1200px) {
    text-align: center;
    top: 65%;
    left: 50%;
  }

  @media (max-width: 576px) {
    font-size: 8vw;
    top: 75%;
  }
`;

export const StyledMenuItem = styled.div`
  margin-top: 8vh;
  position: relative;
  transition: opacity 0.5s ease-out;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  animation: ${({ zoom }) =>
    zoom === "out" ? "menuItemZoomOut 2s ease 0.7s forwards" : "none"};

  @media (max-width: 1200px) {
    margin-top: 4vh;
  }

  &.backlight p {
    opacity: 0;
  }

  .menu_item_backlight {
    position: absolute;
    transform: ${({ isActive }) =>
      `translate(-50%, -50%) scale(${isActive ? 1 : 0})`};
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    left: 50%;
    top: 50%;
    width: 200%;
    height: 200%;
    z-index: 1;
    transition: all 1s ease;

    @media (max-width: 1200px) {
      width: 150%;
    }

    &#menu_author_backlight {
      width: 120%;
      left: 65%;

      @media (max-width: 1200px) {
        width: 100%;
        left: 50%;
      }
    }
  }

  &#menu_about {
    font-size: 9vh;
    margin-top: 0;
    margin-bottom: 18vh;

    @media (max-width: 1200px) {
      margin-bottom: 9vh;
    }

    @media (max-width: 576px) {
      font-size: 10vw;
      margin-bottom: 7vh;
    }
  }
`;

export const StyledMenuItemStroke = styled.svg`
  position: absolute;
  transform: translate(0, -50%);
  top: 50%;
  left: 0;
  width: 100%;
  height: 100%;

  text {
    stroke-width: 1;
    stroke-dasharray: 0 50%;
    animation: ${({ isActive, isLeft }) =>
      isActive
        ? "logoStrokeEnter 1.2s forwards"
        : isLeft
        ? "logoStrokeLeave 1.2s forwards"
        : "none"};

    &#menu_about_stroke {
      stroke: #b90bee;
      filter: drop-shadow(0 0 5px rgb(172, 12, 236));
    }

    &#menu_author_stroke {
      stroke: #9b0bee;
      filter: drop-shadow(0 0 5px rgb(133, 14, 231));
    }

    &#menu_other_stroke {
      stroke: #c10bee;
      filter: drop-shadow(0 0 5px rgb(236, 12, 217));
    }
  }
`;
