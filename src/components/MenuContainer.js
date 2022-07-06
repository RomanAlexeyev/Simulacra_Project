import { useWindowDimensions } from "../custom_hooks";
import { useDispatch, useSelector } from "react-redux";
import { setMenuItem } from "../store/menuSlice";

import {
  StyledMenuContainer,
  StyledMenuItem,
  StyledMenuItemStroke,
} from "./styled/Menu.styled";

const titles = {
  about: "what i am",
  author: "author",
  source: "source code",
};

function MenuContainer({
  zoom,
  currentStroke,
  setCurrentStroke,
  lastStroke,
  setLastStroke,
  uiClickListening,
  mouseEnterListening,
  stopUiListening,
}) {

  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const updateMenu = (id) => dispatch(setMenuItem(id));

  const menuItem = useSelector(state => state.menu.menuItem);

  const menuItemClickHandler = (id) => {
    if (!uiClickListening) return;
    stopUiListening();
    updateMenu(id);
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
    <StyledMenuContainer>
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
