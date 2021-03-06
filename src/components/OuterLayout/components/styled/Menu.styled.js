import styled from "styled-components";

export const StyledMenuContainer = styled.div`
  flex: 1;
  white-space: nowrap;
  user-select: none;
  position: relative;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
  z-index: 4;
  color: transparent;
  -webkit-text-stroke: ${({ theme }) => theme.colors.textStroke};
  text-shadow: ${({ theme }) => theme.colors.menuTextColor};
  transition: all 2s ease 0.7s;

  @media (max-aspect-ratio: 7/5) {
    margin-right: 0;
    margin-bottom: 5%;
  }

  @media (max-aspect-ratio: 4/5) {
    margin-bottom: 0;
    margin-top: 10%;
    justify-content: center;
  }
`;

export const StyledMenuItem = styled.div`
  font-size: 6.5vh;
  margin-top: 10%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  overflow: visible;
  transition: opacity 0.5s ease-out;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  animation: ${({ zoom }) =>
    zoom === "out"
      ? "menuItemZoomOut 2s ease 0.7s forwards"
      : zoom === "in"
      ? "menuItemZoomIn 1s ease forwards"
      : "none"};

  @media (max-aspect-ratio: 7/5) {
    justify-content: center;
  }

  @media (max-aspect-ratio: 4/5) {
    font-size: 7vw;
    margin-top: 7%;
    animation: ${({ zoom }) =>
      zoom === "out"
        ? "menuItemZoomOut 2s ease 0.7s forwards"
        : zoom === "in"
        ? "menuItemZoomIn4_5 1s ease forwards"
        : "none"};
  }

  &.backlight p {
    -webkit-text-stroke: 0px;
    text-shadow: none;
    position: relative;
  }

  .menu_item_backlight {
    position: absolute;
    transform: ${({ isActive }) =>
      `translate(-50%, -50%) scale(${isActive ? 1 : 0})`};
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    left: 50%;
    top: 50%;
    width: 250%;
    height: 250%;
    z-index: 1;
    transition: all 1s ease;

    &#menu_author_backlight {
      width: 120%;
    }
  }

  &#menu_about {
    animation: ${({ zoom }) =>
      zoom === "out"
        ? "menuItemZoomOut 2s ease 0.7s forwards"
        : zoom === "in"
        ? "menuItemZoomInAbout 1s ease forwards"
        : "none"};
    font-size: 9vh;
    margin-top: 0;
    margin-bottom: 18%;

    @media (max-aspect-ratio: 4/5) {
      font-size: 10vw;
      margin-bottom: 10%;
      animation: ${({ zoom }) =>
        zoom === "out"
          ? "menuItemZoomOut 2s ease 0.7s forwards"
          : zoom === "in"
          ? "menuItemZoomInAbout4_5 1s ease forwards"
          : "none"};
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
    stroke-dasharray: ${({isActive}) => isActive ? "50% 0" : "0 50%"};
    stroke-dashoffset: ${({isActive}) => isActive ? "-5%" : "5%"};
    transition: stroke-dasharray 1.2s ease, stroke-dashoffset 1.2s ease;

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
