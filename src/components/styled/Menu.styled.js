import styled from "styled-components";

export const StyledMenuContainer = styled.div`
  font-family: "Mexon";
  user-select: none;
  text-align: right;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  right: 0;
  z-index: 4;
  color: transparent;
  -webkit-text-stroke: ${({ theme }) => theme.colors.textStroke};
  text-shadow: ${({ theme }) => theme.colors.menuTextColor};

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
  /* font-size: ${({ zoom }) => (zoom === "out" ? "1vw" : "7vh")}; */
  /* margin-top: ${({ zoom }) => (zoom === "out" ? "0" : "8vh")}; */
  /* margin-bottom: ${({ zoom }) => (zoom === "out" ? "1vw" : "0")}; */
  font-size: 6.5vh;
  margin-top: 8vh;
  position: relative;
  transition: opacity 0.5s ease-out;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  animation: ${({ zoom }) =>
    zoom === "out"
      ? "menuItemZoomOut 3s ease 0.7s forwards"
      : zoom === "in"
      ? "menuItemZoomIn 1s ease forwards"
      : "none"};

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
    animation: ${({ zoom }) =>
    zoom === "out"
      ? "menuItemZoomOut 3s ease 0.7s forwards"
      : zoom === "in"
      ? "menuItemZoomInAbout 1s ease forwards"
      : "none"};
    /* font-size: ${({ zoom }) => (zoom === "out" ? "1vw" : "9vh")}; */
    font-size: 9vh;
    margin-top: 0;
    margin-bottom: 18vh;
    /* margin-bottom: ${({ zoom }) => (zoom === "out" ? "1vw" : "18vh")}; */

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
    stroke-width: 2;
    stroke-dasharray: 0 50%;
    animation: ${({ isActive, isLeft }) =>
      isActive
        ? "logoStrokeEnter 1.2s forwards"
        : isLeft
        ? "logoStrokeLeave 1.2s forwards"
        : "none"};

    &#menu_about_stroke {
      stroke: #b90bee;
      filter: drop-shadow(0 0 5px rgba(172, 12, 236, 0.8));
    }

    &#menu_author_stroke {
      stroke: #9b0bee;
      filter: drop-shadow(0 0 5px rgba(133, 14, 231, 0.8));
    }

    &#menu_source_stroke {
      stroke: #c10bee;
      filter: drop-shadow(0 0 5px rgba(236, 12, 217, 0.8));
    }
  }
`;
