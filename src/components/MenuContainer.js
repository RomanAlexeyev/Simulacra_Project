import useWindowDimensions from "../custom_hooks/useWindowDimensions";

import {
  StyledMenuContainer,
  StyledMenuItem,
  StyledMenuItemStroke,
} from "./styled/Menu.styled";

const titles = {
  about: "what i am",
  author: "author",
  other: "other work",
};

function MenuContainer({
  zoom,
  currentStroke,
  setCurrentStroke,
  lastStroke,
  setLastStroke,
  menuItem,
  setMenuItem,
  uiClickListening,
  mouseEnterListening,
  stopUiListening,
  blurred,
}) {

  const { width } = useWindowDimensions();

  const menuItemClickHandler = (id) => {
    if (!uiClickListening) return;
    stopUiListening();
    setMenuItem(id);
  };

  const menuItemEnterHandler = (id) => {
    if (!mouseEnterListening) return;
    setCurrentStroke(id);
  };

  const menuItemLeaveHandler = (id) => {
    if (!mouseEnterListening) return;
    setCurrentStroke(null);
    setLastStroke(id);
  };

  return (
    <StyledMenuContainer blurred={blurred}>
      {Object.keys(titles).map((title, idx) => {
        let menuItemId = `${"menu_" + title}`;
        let menuStrokeId = `${"menu_" + title + "_stroke"}`;
        return (
          <StyledMenuItem
            id={`${"menu_" + title}`}
            key={idx}
            zoom={zoom}
            visible={!menuItem || menuItem === menuItemId}
          >
            <p>{titles[title]}</p>

            <StyledMenuItemStroke
              isActive={menuItemId === currentStroke}
              isLeft={menuItemId === lastStroke}
            >
              <text
                id={menuStrokeId}
                x={`${width > 1200 ? 100 : 50}%`}
                y="78%"
                textAnchor={width > 1200 ? "end" : "middle"}
                fill="transparent"

                onMouseEnter={() => menuItemEnterHandler(menuItemId)}
                onMouseLeave={() => menuItemLeaveHandler(menuItemId)}
                onClick={() => menuItemClickHandler(menuItemId)}
              >
                {titles[title]}
              </text>
            </StyledMenuItemStroke>
          </StyledMenuItem>
        );
      })}
    </StyledMenuContainer>
  );
}

export default MenuContainer;
